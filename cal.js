module.exports = function(args) {
    if (args.length < 2) return;
    var total = args[0];
    var items = args.slice(1);
    var sum = items.reduce((a, b) => +a + +b);
    return items.map(item => +(item / sum * total).toFixed(1));
}
