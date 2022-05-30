import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status in props schould be in state", () => {
        const component = create(<ProfileStatus status="Julia works on her emotional health" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Julia works on her emotional health");
    });
    test("after creation span with correct status schould be displyed", () => {
        const component = create(<ProfileStatus status="Julia works on her emotional health" />);
        const root = component.root;
        let span = root.findAllByType("span");
        expect(span).not.toBeNull;
    });
    test("after creation input with correct status schouldnt be displyed", () => {
        const component = create(<ProfileStatus status="Julia works on her emotional health" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation span schould contains correct status", () => {
        const component = create(<ProfileStatus status="Julia works on her emotional health" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('Julia works on her emotional health');

    });
    test("input schould be displayed in EditMode instead of span", () => {
        const component = create(<ProfileStatus status="Julia works on her emotional health" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Julia works on her emotional health');
    });
    test("callback should be called", () => {
        const MockCalback=jest.fn()
        const component = create(<ProfileStatus status="Julia works on her emotional health" UpdateStatus={MockCalback} />);
        const instance = component.getInstance();
       instance.deActivateEditMode()
       expect(MockCalback.mock.calls.length).toBe(1)
    });
});