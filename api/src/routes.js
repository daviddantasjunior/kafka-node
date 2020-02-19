import express from 'express';
import { CompressionTypes } from 'kafkajs';

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
  const message = {
    user: { id: 1, name: "David Dantas" },
    course: 'Kafka with Node.js',
    grade: 5,
  };

  // Chamar micro serviço
  await req.producer.send({
    topic: 'issue-certificate',
    compression: CompressionTypes.GZIP,
    messages: [
      { value: JSON.stringify(message) },
      { value: JSON.stringify({ ...message, user: { ...message.user, name: 'Uinfor' } }) },
    ],
  })

  return res.json({ ok: true });
});

export default routes;