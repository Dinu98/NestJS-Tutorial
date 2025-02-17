import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: String) {
    const messages = JSON.parse(await readFile('messages.json', 'utf-8'));

    return messages[`${id}`];
  }

  async findAll() {
    return JSON.parse(await readFile('messages.json', 'utf-8'));
  }

  async create(content: string) {
    const messages = JSON.parse(await readFile('messages.json', 'utf-8'));

    const id = Math.round(Math.random() * 999999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
