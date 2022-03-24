module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1cdea6b28495b522de6fd55df89a1d68'),
  },
});
