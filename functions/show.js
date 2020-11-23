// Credit to Josh Comeau 
const faunadb = require('faunadb');

exports.handler = async (event) => {

  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  });

  const { id } = event.queryStringParameters;
//  if (!slug) {
//    return {
//      statusCode: 400,
//      body: JSON.stringify({
//        message: 'Article slug not provided',
//      }),
//    };
//  }
//
//  const doesDocExist = await client.query(
//    q.Exists(q.Match(q.Index('slug'), slug))
//  );
//
//  if (!doesDocExist) {
//    await client.query(
//      q.Create(q.Collection('docs'), {
//        data: { slug: slug, likes: 1 },
//      })
//    );
//  }

  const ret = await client.query(
    q.Get(q.Ref(q.Collection('docs'), id))
  )

  // db.query(
  //   q.Get(q.Ref(q.Collection('docs'), this.$nuxt.context.params.id ))
  // )
  // .then((ret) => console.log( ret.data) )

  return {
    statusCode: 200,
    body: JSON.stringify(ret),
  };
};