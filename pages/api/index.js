import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({ data: 'get!' });
  })
  .post((req, res) => {
    res.json({ data: 'post' });
  });
export default handler;
