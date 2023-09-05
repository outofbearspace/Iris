"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4428],{43474:e=>{e.exports=JSON.parse('{"functions":[],"properties":[{"name":"Selectable","desc":"An object which can be selected.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string,\\n    Index: any, -- index of selectable value.\\n    NoClick: boolean? = false -- prevents the selectable from being clicked by the user.\\n}\\nEvents = {\\n    selected: () -> boolean,\\n    unselected: () -> boolean,\\n    active: () -> boolean,\\n    clicked: () -> boolean,\\n    rightClicked: () -> boolean,\\n    doubleClicked: () -> boolean,\\n    ctrlClicked: () -> boolean,\\n    hovered: () -> boolean,\\n}\\nStates = {\\n    index: State<any> -- a shared state between all selectables.\\n}\\n```\\n    ","lua_type":"Iris.Selectable","tags":["Widget","HasState"],"source":{"line":1378,"path":"src/client/Iris/API.lua"}},{"name":"Combo","desc":"A selection box to choose a value from a range of values.\\n\\n```lua\\nhasChildren = true\\nhasState = true\\nArguments = {\\n    Text: string,\\n    NoButton: boolean? = false, -- hide the dropdown button.\\n    NoPreview: boolean? = false -- hide the preview field.\\n}\\nEvents = {\\n    opened: () -> boolean,\\n    clsoed: () -> boolean,\\n    clicked: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    index: State<any>,\\n    isOpened: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.Combo","tags":["Widget","HasChildren","HasState"],"source":{"line":1409,"path":"src/client/Iris/API.lua"}},{"name":"ComboArray","desc":"A selection box to choose a value from an array.\\n\\n```lua\\nhasChildren = true\\nhasState = true\\nArguments = {\\n    Text: string,\\n    NoButton: boolean? = false, -- hide the dropdown button.\\n    NoPreview: boolean? = false -- hide the preview field.\\n}\\nEvents = {\\n    opened: () -> boolean,\\n    clsoed: () -> boolean,\\n    clicked: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    index: State<any>,\\n    isOpened: State<boolean>?\\n}\\nExtra = {\\n    selectionArray: { any } -- the array to generate a combo from.\\n}\\n```\\n    ","lua_type":"Iris.Combo","tags":["Widget","HasChildren","HasState"],"source":{"line":1443,"path":"src/client/Iris/API.lua"}},{"name":"ComboEnum","desc":"A selection box to choose a value from an Enum.\\n\\n```lua\\nhasChildren = true\\nhasState = true\\nArguments = {\\n    Text: string,\\n    NoButton: boolean? = false, -- hide the dropdown button.\\n    NoPreview: boolean? = false -- hide the preview field.\\n}\\nEvents = {\\n    opened: () -> boolean,\\n    clsoed: () -> boolean,\\n    clicked: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    index: State<any>,\\n    isOpened: State<boolean>?\\n}\\nExtra = {\\n    enumType: Enum -- the enum to generate a combo from.\\n}\\n```\\n    ","lua_type":"Iris.Combo","tags":["Widget","HasChildren","HasState"],"source":{"line":1492,"path":"src/client/Iris/API.lua"}}],"types":[],"name":"Combo","desc":"Combo Widget API\\n    ","source":{"line":1346,"path":"src/client/Iris/API.lua"}}')}}]);