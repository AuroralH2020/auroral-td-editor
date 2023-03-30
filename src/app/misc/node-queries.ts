export const itemsQuery = `
PREFIX td: <https://www.w3.org/2019/wot/td#>
    SELECT ?oid ?itemname ?itemtype ?propname ?pid ?proptype ?datatype ?units ?desc WHERE { 
        ?td td:hasPropertyAffordance ?property .
        ?td td:title ?itemname .
        OPTIONAL { ?td td:type ?itemtype . }
        ?property td:title ?propname .
        ?property td:name ?pid .
        OPTIONAL { ?property td:type ?datatype . }
        OPTIONAL { ?property td:measures ?units . }
        OPTIONAL { ?property td:monitors ?proptype . }
        OPTIONAL { ?property td:description ?desc . }
        BIND ( replace(str(?td), 'https://oeg.fi.upm.es/wothive/', '', 'i') as ?oid)
     }`
