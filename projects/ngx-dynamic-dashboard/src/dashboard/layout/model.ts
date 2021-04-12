/**
 * Created by jayhamilton on 1/31/17.
 */
export const boardLayouts = [

    {
        id: 0,
        boardInstanceId: 0,
        title: 'one-narrow',
        checked: false,
        structure: '8',
        rows: [{
            styleClass: 'row justify-content-center',
            columns: [
                {
                    styleClass: 'col-8',
                }]
        }]
    },
    {
        id: 1,
        boardInstanceId: 1,
        title: 'single',
        checked: false,
        structure: '14',
        rows: [{
            styleClass: 'row justify-content-center',
            columns: [
                {
                    styleClass: 'col',

                }]
        }]
    },
    {
        id: 2,
        boardId: 2,
        title: 'narrow-right',
        checked: false,
        structure: '10-6',
        rows: [{
            styleClass: 'row',
            columns: [
                {
                    styleClass: 'col-9',

                },
                {
                    styleClass: 'col-3',

                }]
        }]
    },
    {
        id: 3,
        boardInstanceId: 3,
        title: 'wide-center',
        checked: false,
        structure: '4-8-4',
        rows: [{
            styleClass: 'row',
            columns: [
                {
                    styleClass: 'col-3',

                },
                {
                    styleClass: 'col-6',

                },
                {
                    styleClass: 'col-3',

                }]
        }]
    },
    {
        id: 4,
        boardInstanceId: 4,
        title: 'narrow-left',
        checked: false,
        structure: '4-12',
        rows: [{
            styleClass: 'row',
            columns: [
                {
                    styleClass: 'col-3',
                },
                {
                    styleClass: 'col-9',
                }]
        }]
    },
    {
        id: 5,
        boardInstanceId: 5,
        title: 'two-even',
        checked: true,
        structure: '6-6',
        rows: [{
            styleClass: 'row',
            columns: [
                {
                    styleClass: 'col-6',

                },
                {
                    styleClass: 'col-6',

                }]
        }]
    },
    {
        id: 6,
        boardInstanceId: 6,
        title: 'three-even',
        checked: false,
        structure: '5-5-5',
        rows: [{
            styleClass: 'row',
            columns: [
                {
                    styleClass: 'col-4',

                },
                {
                    styleClass: 'col-4',

                },
                {
                    styleClass: 'col-4',
                }
            ]
        }]
    }
];
