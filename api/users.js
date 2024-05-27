import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await User.findAll();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}