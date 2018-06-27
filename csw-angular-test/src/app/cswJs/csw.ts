import {Ows} from './ows';
import {Filter} from './filter';
import {Jsonix} from '../jsonix/jsonix';
//import {Jsonix} from 'jsonix';


export class Csw {
    jsonnixContext:any;
    version:any;
    credentials:any;
    TYPE_NAME:any;
    filter:any;
    contraint:any;
    url:any;
    util:Ows = new Ows();
    
    constructor(url, config) {
        this.version = '2.0.2';
        /**
         * Jsonix Configuration 
         * */
        if (config == null){
            throw 'Missing Configuration! It is a must to CSW to know the profile';
        } else if (config[2] != undefined){
            this.credentials = config[2];
        }
       this.jsonnixContext = new Jsonix.Context(config[0], config[1]);
        // init by doing a GetCapabilities and parsing metadata
        this.url = url;

     }

     public GetCapabilities = function(){
        var getCapabilities = new this.GetCapabilitiesHandler();
        // XML to Post.
        var myXML = this.marshalDocument(getCapabilities);
        var self = this;
        return Ows.httpPost(this.url, "application/xml", myXML, this.credentials).then(function(responseXML){
            var capabilities;
            capabilities = self.unmarshalDocument(responseXML);
            console.log(responseXML);
            console.log(capabilities);
            self.serviceIdentification = capabilities['csw:Capabilities'].serviceIdentification;
            self.serviceProvider = capabilities['csw:Capabilities'].serviceProvider;
            self.operationsMetadata = capabilities['csw:Capabilities'].operationsMetadata;
            self.filterCapabilities = capabilities['csw:Capabilities'].filterCapabilities;
            return capabilities;
        });
    };

    public GetRecords = function(startPosition, maxRecords, filter, outputSchema) {

    var query;
    if (filter === undefined || filter === null) {
        query = new this.Query('full');
    } else {
        // Create Query
        query = new this.Query('full', new this.Constraint(filter));
    }
    // Create de GetRecords Action.
    var recordAction = new this.GetRecordsHandler(startPosition, maxRecords, query, outputSchema);
    // XML to Post.
    console.log(recordAction);
    var self=this;
    var myXML = self.marshalDocument(recordAction);
    console.log(myXML);
    // Post XML
    var self=this;
    return Ows.httpPost(this.url, "application/xml", myXML, this.credentials).then(function(responseXML){
        console.log(responseXML);
        return self.unmarshalDocument(responseXML);
    });

    };

    public marshalDocument = function(object){
        return this.jsonnixContext.createMarshaller().marshalDocument(object);
    };
    
    public unmarshalDocument = function(xml){
        return this.jsonnixContext.createUnmarshaller().unmarshalDocument(xml);
    };
    
    // To simplify de API.
    public xmlToObject = function(xml){
        return this.unmarshalDocument(xml);
    };
    
    public objectToXML = function(object){
        return this.marshalDocument(object);
    };
    
    public unmarshalString = function(string){
        return this.jsonnixContext.createUnmarshaller().unmarshalString(string);
    };

    public GetRecordById = function(id_list) {
        var byIdAction = new this.GetRecordByIdHandler(id_list);
        //console.log(byIdAction);
        self=this;
        var myXML = this.marshalDocument(byIdAction);
        //console.log(myXML);
        return Ows.httpPost(this.url, "application/xml", myXML, this.credentials).then(function(responseXML){
            return this.unmarshalDocument(responseXML);
        });
    };
    
    public getOperationByName = function(name) {
        return  this.operationsMetadata.operation.filter(function(element){
            return element.name === name;
        })[0];
    };
    
    /**
     * Operation name: GetDomain
     * */
    
    public GetDomain = function(propertyName){
        var getdomainAction =  this.GetDomainHandler(propertyName);
        var myXML = this.marshalDocument(getdomainAction);
        //console.log(myXML);
        return Ows.httpPost(this.url, "application/xml", myXML, this.credentials).then(function(responseXML){
            return this.unmarshalDocument(responseXML);
        });
    };
    
    /**
     * Operation name: Insert
     */
    
    public insertRecords = function (records){
        var transactionAction = this.Insert(records);
        var transaction = this.Transaction(transactionAction);
        console.log(transaction);
        var myXML = this.marshalDocument(transaction);
        console.log(myXML);
        return Ows.httpPost(this.url, "application/xml", myXML, this.credentials).then(function(responseXML){
            return this.unmarshalDocument(responseXML);
        });
    };
    
    /**
     * Operation name: Update
     */
    
    public updateRecord = function(records){
        var transactionAction = new this.Update(records);
        var transaction = this.Transaction(transactionAction);
        console.log(transaction);
        var myXML = this.marshalDocument(transaction);
        console.log(myXML);
        return Ows.httpPost(this.url, "application/xml", myXML, this.credentials).then(function(responseXML){
            return this.unmarshalDocument(responseXML);
        });
    };
    
    /**
     * Operation name: Delete
     */
    public deleteRecords = function(filter){
        var transactionAction = new this.Delete(filter);
        var transaction = this.Transaction(transactionAction);
        var myXML = this.marshalDocument(transaction);
        console.log(myXML);
        return Ows.httpPost(this.url, "application/xml", myXML, this.credentials).then(function(responseXML){
            return this.unmarshalDocument(responseXML);
        });
    };
    
    
    public Constraint = function(filter){
        this.TYPE_NAME = "CSW_2_0_2.QueryConstraintType";
        this.version = "1.1.0";
        this.filter = filter;
    };

    public GetRecordsHandler = function(startPosition, maxRecords, query, outputSchema){
        this['csw:GetRecords'] = {
            TYPE_NAME: "CSW_2_0_2.GetRecordsType",
            abstractQuery: query,
            startPosition: startPosition,
            maxRecords: maxRecords,
            resultType: "results",
            service: "CSW",
            version: "2.0.2"
        };
    
        if (outputSchema){
            this['csw:GetRecords'].outputSchema = outputSchema;
            console.log(outputSchema);
        }
    
        console.log(this);
    };

    public GetRecordByIdHandler = function(ids){
        this['csw:GetRecordById'] ={
            TYPE_NAME: "CSW_2_0_2.GetRecordByIdType",
            elementSetName: {
                ObjectTYPE_NAME: "CSW_2_0_2.ElementSetNameType",
                value: "full"
            },
            id: ids,
            service :  "CSW",
            version : "2.0.2"
        };
    };
    
    /**
     * Query Request Template
     *
     * This Objects already use the simple mapping style from jsonix
     * */
    
    public Query = function(elementSetName, constraint){
        this['csw:Query'] = {
            TYPE_NAME: "CSW_2_0_2.QueryType",
            elementSetName : {
                TYPE_NAME: "CSW_2_0_2.ElementSetNameType",
                value: elementSetName
            },
            typeNames : [
                {
                    key: "{http://www.opengis.net/cat/csw/2.0.2}Record",
                    localPart: "Record",
                    namespaceURI: "http://www.opengis.net/cat/csw/2.0.2",
                    prefix: "csw",
                    string: "{http://www.opengis.net/cat/csw/2.0.2}csw:Record"
                }
            ]
        };
        if (constraint){
            this['csw:Query'].constraint = constraint;
        }
    };
    
    /**
     * GetDomain Request Template
     *
     * This Objects already use the simple mapping style from jsonix
     * */
    
    public GetDomainHandler = function (propertyName){
        this['csw:GetDomain'] ={
            TYPE_NAME: "CSW_2_0_2.GetDomainType",
            propertyName: propertyName,
            service: "CSW",
            version: "2.0.2"
        };
    };
    
    /**
     * GetCapabilities Request Template
     *
     * This Objects already use the simple mapping style from jsonix
     * The GetCapabilities should be on the Ows.js ?
     */
    public GetCapabilitiesHandler = function () {
        this["csw:GetCapabilities"] = {
            "TYPE_NAME":"CSW_2_0_2.GetCapabilitiesType",
            "service":"CSW",
            "acceptVersions": {
                "TYPE_NAME":"OWS_1_0_0.AcceptVersionsType",
                "version":["2.0.2"]
            },
            "acceptFormats": {
                "TYPE_NAME": "OWS_1_0_0.AcceptFormatsType",
                "outputFormat":["application/xml"]
            }
        }
    };
    
    /**
     * Transaction Request Template
     */
    
    public Transaction = function(action){
      this['csw:Transaction'] = {
          'TYPE_NAME': "CSW_2_0_2.TransactionType",
          insertOrUpdateOrDelete: [action],
          service: "CSW",
          version: "2.0.2"
      }
    };
    
    /**
     * Insert template
     */
    
    public Insert = function(records){
        this.TYPE_NAME =  "CSW_2_0_2.InsertType";
        this.any = records;
    };
    
    /**
     * Update Template
     */
    
    public Update = function(records) {
        this.TYPE_NAME =  "CSW_2_0_2.UpdateType";
        this.any = records;
    };
    
    /**
     * Delete Template
     */
    
    public Delete = function(filter){
        this.TYPE_NAME = "CSW_2_0_2.DeleteType";
        this.constraint = {
            TYPE_NAME: "CSW_2_0_2.QueryConstraintType",
            filter : filter,
            version: "1.1.0"
        };
    };

   
  }