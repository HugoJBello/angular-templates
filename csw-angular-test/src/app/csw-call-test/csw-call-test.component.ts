import { Component, OnInit } from '@angular/core';
import {CswInvokerService} from '../csw-invoker.service'
import {Jsonix} from '../jsonix/jsonix';

@Component({
  selector: 'app-csw-call-test',
  templateUrl: './csw-call-test.component.html',
  styleUrls: ['./csw-call-test.component.css']
})
export class CwsCallTestComponent implements OnInit {

  constructor(public cswInvokerService: CswInvokerService) { }

  ngOnInit() {
    this.callCws();
  }

  public callCws(){
    // var cswUrl="https://www.geopicardie.fr/geonetwork/srv/fre/csw-for-harvesters"
    // const cswUrl = 'http://demo.pycsw.org/cite/csw';
    // let cswUrl="http://ltpprn:8080/geonetwork/srv/eng/csw"
    // let cswUrl="http://localhost:8080/geonetwork/srv/eng/csw"

	  // -80, 150, 80, -150
     let cswUrl = "http://localhost:9191/geoserver/csw";
    // let cswUrl="http://www.ign.es/csw-inspire/srv/spa/csw"


    const lowerCorner1 = -80;
    const lowerCorner2 = 150;
    const upperCorner1 = 80;
    const upperCorner2 = -150;

    /*
    let lowerCorner1=44.792;
    let lowerCorner2=-6.171;
    let upperCorner1=51.126;
    let upperCorner2=-2.228;
    */

    const label1 = 'dc:subject';
    const text1 = 'IGN';

    const label2 = 'dc:subject';
    const text2 = 'IGN2';



	  const outputSchemaOpen = 'http://www.opengis.net/cat/csw/2.0.2';
    const outputSchemaIso = 'http://www.isotc211.org/2005/gmd';

    this.cswInvokerService.getCapabilities(cswUrl);

    this.cswInvokerService.getRecords(1, 10, cswUrl, outputSchemaOpen);

    this.cswInvokerService.getRecordsBbox(1, 10, lowerCorner1, lowerCorner2, upperCorner1, upperCorner2, cswUrl, outputSchemaOpen);

    this.cswInvokerService.getRecordsPropertyLike(1, 10, cswUrl, label1, text1, outputSchemaOpen);

    this.cswInvokerService.getRecordsPropertiesLike(1, 10, cswUrl, label1, text1, label2, text2, outputSchemaOpen);
  }

}
