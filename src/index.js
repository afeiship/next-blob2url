(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.blob2url = function (inBlob) {
    return URL.createObjectURL(inBlob);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.blob2url;
  }
})();
