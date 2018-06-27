import {Jsonix} from 'jsonix/jsonix';

declare module Ows4js {
    
    export class Filter {
        
        /**
         * Creates an instance of Filter.
         */
        JsonixContext:Jsonix;
        constructor();
         /** 
         * (description)
         *
         * @param {string} value (description)
         * @returns {Filter} (description)
         */
        PropertyName(propertyName:string):Filter;

        /**
         * (description)
         *
         * @param {string} value (description)
         * @returns {Filter} (description)
         */
        isLike(value:string):Filter;

        /**
         * (description)
         *
         * @param {string} value (description)
         * @returns {Filter} (description)
         */
        isNull(value:string):Filter;

        /**
         * (description)
         *
         * @param {string} lowerValue (description)
         * @param {string} upperValue (description)
         * @returns {Filter} (description)
         */
        isBetween(lowerValue:string, upperValue:string):Filter;

         /**
         * (description)
         *
         * @param {string} value (description)
         * @returns {Filter} (description)
         */
        isEqualTo(value:string):Filter; /**
        
        /** (description)
        *
        * @param {string} value (description)
        * @returns {Filter} (description)
        */
       isLessThanOrEqualTo(value:string):Filter;

       /** (description)
        *
        * @param {string} value (description)
        * @returns {Filter} (description)
        */
       isGreaterThan(value:string):Filter;

       /** (description)
        *
        * @param {string} value (description)
        * @returns {Filter} (description)
        */
       isLessThan(value:string):Filter;

       /** (description)
        *
        * @param {string} value (description)
        * @returns {Filter} (description)
        */
       isGreaterThanOrEqualTo(value:string):Filter;

       /** (description)
        *
        * @param {string} value (description)
        * @returns {Filter} (description)
        */
       isNotEqualTo(value:string):Filter;

       /** (description)
        *
        * @param {Filter} filter (description)
        * @returns {Filter} (description)
        */
       and(filter:Filter):Filter;

       /** (description)
        *
        * @param {Filter} filter (description)
        * @returns {Filter} (description)
        */
       or(filter:Filter):Filter;

       /** (description)
        *
        * @param {Filter} filter (description)
        * @returns {Filter} (description)
        */
       or(filter:Filter):Filter;

    }

    export class Cws {
        /**
         * Creates an instance of Filter.
         */
        constructor(url:string, config:any);
         /**
         * (description)
         *
         * @returns {any} (description)
         */
        GetCapabilities():any;

        /**
         * (description)
         *
         * @returns {any} (description)
         */
        GetRecords(startPosition:string, maxRecords:number, filter:Filter, outputSchema:string):any;

        /**
         * (description)
         * @param {string} id_list
         * @returns {any} (description)
         */
        GetRecordById(id_list:string):any;

        /**
         * (description)
         * @param {string} name
         * @returns {any} (description)
         */
        getOperationByName(name:string):any;

        /**
         * (description)
         * @param {string} propertyName
         * @returns {any} (description)
         */
        GetDomain(propertyName:string):any;

        /**
         * (description)
         * @param {string} records
         * @returns {any} (description)
         */
        insertRecords(records:string):any;

         /**
         * (description)
         * @param {string} records
         * @returns {any} (description)
         */
        updateRecord(records:string):any;

         /**
         * (description)
         * @param {Filter} filter
         * @returns {any} (description)
         */
        deleteRecords(filter:Filter):any;

        
    }

    export class Ows4js {
        constructor();
        Filter:Filter;
        Cws:Cws;
        Util:any;
        Proxy:any;
        Version:string;
    }

       
}