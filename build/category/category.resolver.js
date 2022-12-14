"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var category_servcice_1 = require("./category.servcice");
var category_1 = require("./dto/category");
var category_create_input_1 = require("./dto/category-create.input");
var category_update_input_1 = require("./dto/category-update.input");
var category_mapper_1 = require("./dto/category.mapper");
var CategoryResolver = /** @class */ (function () {
    function CategoryResolver(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryResolver.prototype.getAllCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.findAll()];
            });
        });
    };
    CategoryResolver.prototype.getCategoryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categoryService.findById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryResolver.prototype.createCategory = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.create(category_mapper_1.CategoryMapper.toEntity(input))];
            });
        });
    };
    CategoryResolver.prototype.updateCategory = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.update(input)];
            });
        });
    };
    CategoryResolver.prototype.deleteCategory = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.delete(input)];
            });
        });
    };
    __decorate([
        (0, graphql_1.Query)(function (returns) { return [category_1.CategoryPublic]; }, { name: 'getAllCategories' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CategoryResolver.prototype, "getAllCategories", null);
    __decorate([
        (0, graphql_1.Query)(function (returns) { return category_1.CategoryPublic; }, { name: 'getCategoryById' }),
        __param(0, (0, graphql_1.Args)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CategoryResolver.prototype, "getCategoryById", null);
    __decorate([
        (0, graphql_1.Mutation)(function (returns) { return category_1.CategoryPublic; }, { name: 'createCategory' }),
        __param(0, (0, graphql_1.Args)('input')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [category_create_input_1.CategoryCreateInput]),
        __metadata("design:returntype", Promise)
    ], CategoryResolver.prototype, "createCategory", null);
    __decorate([
        (0, graphql_1.Mutation)(function (returns) { return category_1.CategoryPublic; }, { name: 'updateCategory' }),
        __param(0, (0, graphql_1.Args)('input')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [category_update_input_1.CategoryUpdateInput]),
        __metadata("design:returntype", Promise)
    ], CategoryResolver.prototype, "updateCategory", null);
    __decorate([
        (0, graphql_1.Mutation)(function (returns) { return Boolean; }, { name: 'deleteCategory' }),
        __param(0, (0, graphql_1.Args)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CategoryResolver.prototype, "deleteCategory", null);
    CategoryResolver = __decorate([
        (0, graphql_1.Resolver)(function (of) { return category_1.CategoryPublic; }),
        __metadata("design:paramtypes", [category_servcice_1.CategoryService])
    ], CategoryResolver);
    return CategoryResolver;
}());
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=category.resolver.js.map