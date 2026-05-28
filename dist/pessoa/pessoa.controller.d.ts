import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
export declare class PessoaController {
    private readonly pessoaService;
    constructor(pessoaService: PessoaService);
    create(createPessoaDto: CreatePessoaDto): import("./entities/pessoa.entity").Pessoa;
    findAll(): import("./entities/pessoa.entity").Pessoa[];
    findOne(id: string): import("./entities/pessoa.entity").Pessoa | undefined;
    update(id: string, updatePessoaDto: UpdatePessoaDto): import("./entities/pessoa.entity").Pessoa | "Pessoa não encontrada";
    remove(id: string): import("./entities/pessoa.entity").Pessoa | "Pessoa não encontrada";
}
