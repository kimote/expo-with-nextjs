// @generated: @expo/next-adapter@4.0.10
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

//module.exports = { presets: ['@expo/next-adapter/babel'] };

module.exports = {
 presets: [
  'next/babel',
  [
   'babel-preset-expo',
   {
    web: { useTransformReactJSXExperimental: true },
   },
  ],
 ],
 plugins: [
  ['@babel/plugin-proposal-class-properties', { loose: true }], 
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  [
   '@babel/plugin-proposal-private-property-in-object',
   { loose: true }
  ],
 ],
};