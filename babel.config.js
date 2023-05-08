module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ["@vue/babel-plugin-jsx", { mergeProps: false }],
    "transform-vue-jsx",
    ["babel-helper-vue-jsx-merge-props", { moduleName: "vuejs-tsx" }],
  ],
};
