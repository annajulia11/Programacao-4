import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';
export declare class PessoaService {
    private pessoas;
    private id;
    create(createPessoaDto: CreatePessoaDto): Pessoa;
    findAll(): Pessoa[];
    findOne(id: number): Pessoa | undefined;
    update(id: number, updatePessoaDto: UpdatePessoaDto): Pessoa | "Pessoa não encontrada";
    remove(id: number): Pessoa | "Pessoa não encontrada";
}
