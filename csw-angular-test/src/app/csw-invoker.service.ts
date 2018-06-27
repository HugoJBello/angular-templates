import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';

import {Jsonix} from './jsonix/jsonix';

 import {Csw} from './cswJs/csw'
import {Filter} from './cswJs/filter'

import {OWS_1_0_0}             from 'ogc-schemas';
import {DC_1_1}                from 'ogc-schemas';
import {DCT}                   from 'ogc-schemas';
import {SMIL_2_0}              from 'ogc-schemas';
import {SMIL_2_0_Language}     from 'ogc-schemas';
import {GML_3_1_1}             from 'ogc-schemas';
import {Filter_1_1_0}          from 'ogc-schemas';
import {CSW_2_0_2}             from 'ogc-schemas';
import {GML_3_2_0}             from 'ogc-schemas';
import {ISO19139_GCO_20060504} from 'ogc-schemas';
import {ISO19139_GMD_20060504} from 'ogc-schemas';
import {ISO19139_GMX_20060504} from 'ogc-schemas';
import {ISO19139_GSS_20060504} from 'ogc-schemas';
import {ISO19139_GTS_20060504} from 'ogc-schemas';
import {ISO19139_GSR_20060504} from 'ogc-schemas';
import {ISO19139_SRV_20060504} from 'ogc-schemas';
import {XLink_1_0}             from 'w3c-schemas';


@Injectable({
  providedIn: 'root'
})
export class CswInvokerService {

  cswConfig:any;
  constructor() { 
    this.cswConfig = [
        [
            OWS_1_0_0,
            DC_1_1,
            DCT,
            XLink_1_0,
            SMIL_2_0,
            SMIL_2_0_Language,
            GML_3_1_1,
            Filter_1_1_0,
            CSW_2_0_2,
            GML_3_2_0,
            ISO19139_GCO_20060504,
            ISO19139_GMD_20060504,
            ISO19139_GMX_20060504,
            ISO19139_GSS_20060504,
            ISO19139_GTS_20060504,
            ISO19139_GSR_20060504,
            ISO19139_SRV_20060504
        ],
        {
            namespacePrefixes: {
                'http://www.opengis.net/cat/csw/2.0.2': 'csw',
                "http://www.opengis.net/ogc": 'ogc',
                "http://www.opengis.net/gml": "gml",
                "http://www.opengis.net/ows":"ows",
                "http://inspire.ec.europa.eu/schemas/common/1.0":"inspire_com",
                "http://inspire.ec.europa.eu/schemas/inspire_ds/1.0":"inspire_ds",
                "http://purl.org/dc/elements/1.1/":"dc",
                "http://purl.org/dc/terms/":"dct",
                "http://www.fao.org/geonetwork":"geonet",
                "http://www.isotc211.org/2005/gmd" : "gmd",
                "http://www.isotc211.org/2005/gco" : "gco",
                "http://www.w3.org/1999/xlink":"xlink",
                "http://www.w3.org/2001/XMLSchema-instance":"xsi"

            },
            mappingStyle : 'simplified'
        }
    ];
  }

  public getCapabilities(cswUrl){
    var csw= new Csw(cswUrl, this.cswConfig);      

    csw.GetCapabilities().then(function(result){
      console.log("----------------------------------------- get capabilites"); 
      console.log(result);
      return result;
    });
  }

  public getRecords(min, max, cswUrl, outputSchema){
    var csw= new Csw(cswUrl, this.cswConfig);      

    csw.GetRecords(1,10,undefined, outputSchema).then(function(result){
      console.log("----------------------------------------- get all records"); 
      console.log(result);
      return result;
    });
  }
  
  public getRecordsBbox(min, max, bBoxLlat, bBoxLlon,bBoxUlat,bBoxUlon, cswUrl, outputSchema){
    console.log("-----------------------------------------");

    var csw= new Csw(cswUrl, this.cswConfig);

    var filterObj = new Filter().BBOX(bBoxLlat, bBoxLlon,bBoxUlat,bBoxUlon, 'urn:x-ogc:def:crs:EPSG:6.11:4326');
    var filter ={}
    filter["ogc:Filter"]=filterObj["ogc:Filter"];

    csw.GetRecords(1,10,filter, outputSchema).then(function(result){
      console.log("----------------------------------------- filter by box");
      console.log(result);
      return result;
    });  
  }

  public getRecordsPropertyLike(min, max, cswUrl, label, text, outputSchema){
    console.log("-----------------------------------------");

    var csw= new Csw(cswUrl, this.cswConfig);

    var filterObj = new Filter().PropertyName(label).isLike(text);

    var filter ={}
    filter["ogc:Filter"]=filterObj["ogc:Filter"];

    csw.GetRecords(1,10,filter, outputSchema).then(function(result){
      console.log("----------------------------------------- filter by label");
      console.log(result);
      return result;
    });  
  }

  public getRecordsPropertiesLike(min, max, cswUrl, label1, text1, label2, text2, outputSchema){
    console.log("-----------------------------------------");
    var csw= new Csw(cswUrl, this.cswConfig);

    var filterObj1 = new Filter().PropertyName(label1).isLike(text1);
 
    var filterObj2 = new Filter().PropertyName(label2).isLike(text2);
  
    var filterObj = filterObj1.and(filterObj2);
    var filter ={};
    filter["ogc:Filter"]=filterObj["ogc:Filter"];

    csw.GetRecords(1,10,filter, outputSchema).then(function(result){
      console.log("----------------------------------------- filter by labels " + label1 +" " + label2);
      console.log(result);
      return result;
    });  
  }

  //.PropertyName('dc:subject').isLike('%polution%'))
  

}
  

