import {
    Router
} from 'express';
import urlEncode from 'urlencode';
import contentFile from '../../content.json';

const router = Router();

export default class {
    constructor({
        app,
        datalayer
    }) {
        this.datalayer = datalayer;
        this.router = router;
        router.get('/get_by_subject', (req, res, next) => this.getContentBySubjects(req, res, next));
        router.get('/get_file', (req, res, next) => this.getContentByID(req, res, next));
        router.get('/get_all', (req, res, next) => this.getAll(req, res, next));
    }

    async getContentBySubjects(req, res, next) {
        let subjectArray = req.query.Subject;
        if(!Array.isArray(subjectArray)) {
            subjectArray = [subjectArray];
        }
        const content = contentFile.filter((contentItem) => {
            let match = true;
            for (let subject of subjectArray) {
                subject = urlEncode.decode(subject);
                if(!contentItem.Subjects) {
                    match = false;
                    break;
                }
                if (!contentItem.Subjects.includes(subject)) {
                    match = false;
                    break;
                }
            }
            return match;
        })
        res.send(content);
    }

    async getContentByID(req, res, next) {
        let id = req.query.UUID;
        const content = contentFile.filter((contentItem) => {
            return contentItem.UUID == id;
        })
        let loc = content[0].Location;
        loc = loc.replace("$CONTENT","http://www.pacificschoolserver.org");
        loc = loc.replace(/ /g,"%20");
        res.send(loc);
    }

    async getAll(req, res, next) {
        res.send(contentFile);
    }
};
