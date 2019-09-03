const {describe, it} = require("mocha");
const {expect} = require("chai");

const boobool = require("../");

describe("Boobool", () => {
    it("works", () => {
        expect(boobool("true")).to.be.true;
        expect(boobool("false")).to.be.false;
        expect(boobool(" true ")).to.be.true;
        expect(boobool(" false ")).to.be.false;
        expect(boobool("TRUE")).to.be.true;
        expect(boobool("FALSE")).to.be.false;

        expect(boobool(null)).to.be.undefined;
        expect(boobool(undefined)).to.be.undefined;
        expect(boobool("0")).to.be.undefined;
        expect(boobool("1")).to.be.undefined;
        expect(boobool("null")).to.be.undefined;
        expect(boobool("undefined")).to.be.undefined;
        expect(boobool("")).to.be.undefined;
        expect(boobool("foo")).to.be.undefined;
    });

    it("supports a default value", () => {
        expect(boobool(null, {defaultValue: 123})).to.equal(123);
        expect(boobool("foo", {defaultValue: 123})).to.equal(123);
        expect(boobool("true", {defaultValue: 123})).to.be.true;
        expect(boobool("false", {defaultValue: 123})).to.be.false;
        expect(boobool(null, {defaultValue: true})).to.be.true;
        expect(boobool(null, {defaultValue: false})).to.be.false;
    });
});
