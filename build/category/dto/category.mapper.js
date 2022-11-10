"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMapper = void 0;
var category_entity_1 = require("../entities/category.entity");
var CategoryMapper = /** @class */ (function () {
    function CategoryMapper() {
    }
    CategoryMapper.toEntity = function (input) {
        var entity = new category_entity_1.Category();
        entity.name = input.name;
        entity.slug = input.slug;
        return entity;
    };
    return CategoryMapper;
}());
exports.CategoryMapper = CategoryMapper;
//# sourceMappingURL=category.mapper.js.map