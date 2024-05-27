import Channel from '../../models/Channel';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const channels = await Channel.findAll();
    res.status(200).json(channels);
  } else if (req.method === 'POST') {
    const { name, tag, logo } = req.body;
    const channel = await channel.create({ name, tag, logo });
    res.status(201).json(channel);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}