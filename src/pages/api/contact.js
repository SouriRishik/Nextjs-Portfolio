export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('New Contact Submission:', { name, email, message });

    // TEMPORARY: Just return a success response
    return res.status(200).json({ message: 'Success' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
