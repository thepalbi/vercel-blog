import entitiesDB from "./entities.json";

class CBUPart {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
}

class CBUPartSplitter {
    constructor(from, to, name) {
        this.from = from;
        this.to = to;
        this.name = name;
    }

    split(raw) {
        let value = raw.substring(this.from, this.to);
        return new CBUPart(value, this.getInfo(raw, value));
    }

    getInfo(raw, value) {
        return this.name;
    }
}

class SearchableBankIdCBUPart extends CBUPartSplitter {
    getInfo(raw, value) {
        let bankID = parseInt(value);
        let bankInfo = entitiesDB.entities.filter(bankInfo => bankInfo.id == bankID);
        return `${this.name} - ${bankInfo.length == 1 ? bankInfo[0].name : "Not Found"}`;
    }
}

const CBUParts = [
    new SearchableBankIdCBUPart(0, 3, "BankID"),
    new CBUPartSplitter(3, 7, "BankLocationID"),
    new CBUPartSplitter(8, 21, "AccountID")
];


export function split(raw) {
    let parts = [];
    CBUParts.forEach(part => parts.push(part.split(raw)));
    return parts;
}