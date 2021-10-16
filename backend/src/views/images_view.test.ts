import * as images_view from "./images_view"
import * as class_transformer from "class-transformer"
import * as Image from "../models/Image"
// @ponicode
describe("images_view.default.render", () => {
    test("0", () => {
        let callFunction: any = () => {
            images_view.default.render(class_transformer.plainToClass(Image.Image,{ path: "path/to/file.ext" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            images_view.default.render(class_transformer.plainToClass(Image.Image,{ path: "C:\\\\path\\to\\file.ext" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            images_view.default.render(class_transformer.plainToClass(Image.Image,{ path: "." }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            images_view.default.render(class_transformer.plainToClass(Image.Image,{ path: "./path/to/file" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            images_view.default.render(class_transformer.plainToClass(Image.Image,{ path: "C:\\\\path\\to\\folder\\" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            images_view.default.render(class_transformer.plainToClass(Image.Image,{ path: "" }))
        }
    
        expect(callFunction).not.toThrow()
    })
})
