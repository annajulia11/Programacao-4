"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
let PessoaService = class PessoaService {
    pessoas = [];
    id = 1;
    create(createPessoaDto) {
        const novaPessoa = {
            id: this.id++,
            ...createPessoaDto,
        };
        this.pessoas.push(novaPessoa);
        return novaPessoa;
    }
    findAll() {
        return this.pessoas;
    }
    findOne(id) {
        return this.pessoas.find((pessoa) => pessoa.id === id);
    }
    update(id, updatePessoaDto) {
        const pessoa = this.findOne(id);
        if (!pessoa) {
            return 'Pessoa não encontrada';
        }
        Object.assign(pessoa, updatePessoaDto);
        return pessoa;
    }
    remove(id) {
        const index = this.pessoas.findIndex((pessoa) => pessoa.id === id);
        if (index === -1) {
            return 'Pessoa não encontrada';
        }
        const removida = this.pessoas[index];
        this.pessoas.splice(index, 1);
        return removida;
    }
};
exports.PessoaService = PessoaService;
exports.PessoaService = PessoaService = __decorate([
    (0, common_1.Injectable)()
], PessoaService);
//# sourceMappingURL=pessoa.service.js.map