/** @type LanguageFn */

/* Made by Emma Skovgaard */

export default function (hljs) {
    return {
        name: 'TSO',
        aliases: ['z/OS TSO', 'Time Sharing Option Extensions'],
        case_insensitive: false,
        keywords: {
            keyword: [
                'ALLOCATE', //TSOE commands
                'ALTLIB',
                'ATTRIB',
                'CALL',
                'CANCEL',
                'DELETE',
                'EDIT',
                'END',
                'EXEC',
                'EXECUTIL',
                'FREE',
                'HELP',
                'LINK',
                'LISTALC',
                'LISTBC',
                'LISTCAT',
                'LISTDS',
                'LOADGO',
                'LOGOFF',
                'LOGON',
                'OUTDES',
                'OUTPUT',
                'PRINTDS',
                'PROFILE',
                'PROTECT',
                'RECEIVE',
                'RENAME',
                'RUN',
                'SEND',
                'SMCOPY',
                'SMFIND',
                'SUBMIT',
                'TERMINAL',
                'TEST',
                'TIME',
                'TRANSMIT',
                'TSOEXEC',
                'TSOLIB',
                'VLFNOTE',
                'WHEN',

                'CONTINUE',//Subcommands for OUTPUT
                'END',
                'SAVE',

                'ALLOCATE',//Subcommands for TEST
                'AND',
                'ASSIGNMENT OF VALUES',
                'AT',
                'ATTRIB',
                'CALL',
                'CANCEL',
                'COPY',
                'DELETE',
                'DROP',
                'END',
                'EQUATE',
                'EXEC',
                'FREEMAIN',
                'GETMAIN',
                'GO',
                'LIST',
                'LISTDCB',
                'LISTDEB',
                'LISTPSW',
                'LISTTCB',
                'LISTVP',
                'LISTVSR',
                'LOAD',
                'OFF',
                'OR',
                'PROFILE',
                'QUALIFY',
                'SETVSR',
                'STATUS',
                'UNALLOC',
                'WHERE',

                'ADDGROUP', //RACF commands
                'ADDSD',
                'ADDUSER',
                'ALTDSD',
                'ALTGROUP',
                'ALTUSER',
                'CONNECT',
                'DELDSD',
                'DELUSER',
                'DISPLAY',
                'LISTDSD',
                'LISTGRP',
                'LISTUSER',
                'PASSWORD',
                'PHRASE',
                'PERMIT',
                'RACDCERT',
                'RACLINK',
                'RACMAP',
                'RACPRIV',
                'RACPRMCK',
                'RALTER',
                'RDEFINE',
                'RDELETE',
                'REMOVE',
                'RESTART',
                'RLIST',
                'RVARY',
                'SEARCH',
                'SET',
                'SETROPTS',
                'SIGNOFF',
                'STOP',
                'TARGET',

                'ADD', //RACD subcommands
                'ADDRING',
                'ADDTOKEN',
                'ALTER',
                'ALTMAP',
                'BIND',
                'CHECKCERT',
                'DELMAP',
                'DELRING',
                'DELTOKEN',
                'EXPORT',
                'GENCERT',
                'GENREQ',
                'IMPORT',
                'LIST',
                'LISTCHAIN',
                'LISTMAP',
                'LISTRING',
                'LISTTOKEN',
                'MAP',
                'REKEY',
                'REMOVE',
                'ROLLOVER',
                'UNBIND',
            ],
            built_in: [

            ],
            type: [

            ],
            meta: [

            ]
        },
        contains: [
            hljs.COMMENT(

            ),
            {
                scope: 'string',
                begin: "'", end: "'"
            },
            {
                scope: 'number',
                begin: /\b(\d+)\b/
            }
        ]
    }
}