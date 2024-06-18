import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokensResolver } from './codegen.resolver';
import { TokensService } from './codegen.service';
import { CodeGen } from './codegen.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([CodeGen])
    ],
    providers: [TokensResolver, TokensService],
    exports: [TokensService, TypeOrmModule]
})
export class CodegenModule {}
