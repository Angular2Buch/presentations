var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var BookRanking = (function () {
    function BookRanking() {
        this.books = ['bookA', 'bookB'];
    }
    BookRanking = __decorate([
        angular2_1.Component({
            selector: 'book-ranking'
        }),
        angular2_1.View({
            template: "<h1>Books</h1><p>{{ books }}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], BookRanking);
    return BookRanking;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookRanking;
//# sourceMappingURL=book-ranking.js.map