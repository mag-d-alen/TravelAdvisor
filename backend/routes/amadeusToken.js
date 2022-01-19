/** @format */

// module.exports = function (req, res, next) {
//     const getToken = async () => {
//       try {
//         const token = await axios.post(`${uri}security/oauth2/token`, data, {
//           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         });
//           if (!token) return res.status(401).send('Access Denied');
//         req.token = token;
//             next();
//       } catch (error) {
//           res.status(400).send('Invalid Token');
//       }
//     };
