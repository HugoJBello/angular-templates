import { Component, OnInit } from '@angular/core';
import {CswInvokerService} from '../csw-invoker.service'
import {Jsonix} from '../jsonix/jsonix';

@Component({
  selector: 'app-csw-call-test',
  templateUrl: './csw-call-test.component.html',
  styleUrls: ['./csw-call-test.component.css']
})
export class CwsCallTestComponent implements OnInit {

  constructor(public cswInvokerService:CswInvokerService) { }

  ngOnInit() {
    this.callCws();
  }

  public callCws(){
    //var cswUrl="https://www.geopicardie.fr/geonetwork/srv/fre/csw-for-harvesters"
	  var cswUrl="http://demo.pycsw.org/cite/csw"
    //var cswUrl="http://ltpprn:8080/geonetwork/srv/eng/csw"
    //var cswUrl="http://localhost:8080/geonetwork/srv/eng/csw"
	
	  //-80, 150, 80, -150
	
    //var cswUrl="http://www.ign.es/csw-inspire/srv/spa/csw"
    
    
    var lowerCorner1=-80;
    var lowerCorner2=150;
    var upperCorner1=80;
    var upperCorner2=-150;
    
    /*
    var lowerCorner1=44.792;
    var lowerCorner2=-6.171;
    var upperCorner1=51.126;
    var upperCorner2=-2.228;
    */

    var label1="dc:subject";
    var text1="IGN";

    var label2="dc:subject";
    var text2="IGN2";


    
	  var outputSchemaOpen = "http://www.opengis.net/cat/csw/2.0.2"; 
    var outputSchemaIso = "http://www.isotc211.org/2005/gmd";

    this.cswInvokerService.getCapabilities(cswUrl);

    this.cswInvokerService.getRecords(1,10,cswUrl,outputSchemaOpen);

    this.cswInvokerService.getRecordsBbox(1,10,lowerCorner1, lowerCorner2, upperCorner1, upperCorner2,cswUrl,outputSchemaOpen);

    this.cswInvokerService.getRecordsPropertyLike(1,10,cswUrl,label1,text1,outputSchemaOpen);

    this.cswInvokerService.getRecordsPropertiesLike(1,10,cswUrl,label1,text1,label2,text2,outputSchemaOpen);



  }

}
