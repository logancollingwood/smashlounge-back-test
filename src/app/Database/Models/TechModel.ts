import {Table, Column, Model, HasMany} from 'sequelize-typescript';

@Table
class Tech extends Model<Tech> {

    @Column
    name: string;

    @Column
    birthday: Date;

    
}

