import { Request } from 'express';

export default interface iRequest extends Request {
    service?: any
}