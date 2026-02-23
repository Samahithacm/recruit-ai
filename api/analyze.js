export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { jd, resume } = req.body;

  if (!jd || !resume) {
    return res.status(400).json({ error: 'Missing jd or resume' });
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      messages: [
        {
          role: 'system',
          content: 'You are an expert HR analyst. Return ONLY valid JSON, no markdown, no extra text.'
        },
        {
          role: 'user',
          content: `JOB DESCRIPTION:\n${jd}\n\nRESUME:\n${resume}\n\nReturn exactly this JSON:\n{"score": 0, "action": "Interview", "summary": "summary here", "matchedKeywords": [], "missedKeywords": [], "skills": [{"label": "Technical Skills", "score": 0}, {"label": "Experience Level", "score": 0}, {"label": "Culture & Communication", "score": 0}]}`
        }
      ]
    })
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(500).json({ error: 'Groq API error', details: data });
  }

  const raw = data.choices[0].message.content;
  const clean = raw.replace(/```json|```/g, '').trim();
  const parsed = JSON.parse(clean);

  parsed.emailDraft = parsed.action === 'Interview'
    ? `Hi,\n\nThank you for applying. We'd love to schedule a 30-minute call.\n\nCould you share your availability this week?\n\nBest regards,\nHiring Team`
    : parsed.action === 'Review'
    ? `Hi,\n\nThank you for your application. We will be in touch within 5-7 business days.\n\nBest regards,\nHiring Team`
    : `Hi,\n\nThank you for applying. We've decided to move forward with other candidates.\n\nBest regards,\nHiring Team`;

  parsed.actionClass = parsed.action === 'Interview' ? 'action-interview'
    : parsed.action === 'Review' ? 'action-review'
    : 'action-reject';

  parsed.name = resume.match(/^([A-Z][a-z]+ [A-Z][a-z]+)/m)?.[1] || 'Candidate';

  res.status(200).json(parsed);
}