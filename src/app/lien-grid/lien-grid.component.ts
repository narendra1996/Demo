import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-lien-grid',
  templateUrl: './lien-grid.component.html',
  styleUrls: ['./lien-grid.component.css']
})
export class LienGridComponent implements OnInit {

  constructor(private http: HttpClient) { }
 
  rowData: any;
 
  ngOnInit() {
    let jsonBody = {
      pageStartIndex: "0",
      getLiensFromGSISalso: "true",
      loggedInUser : 'fn100',
      queryParameters: {
        lienSearchInd: 'Y',
       }
    }
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
  //  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    this.http.post('https://avsintra-fit1.avs.oneadp.com/WGSUI/services/lienWebService/liensearch',jsonBody, {observe: "response"}).subscribe((data) => {
      console.log(data);
    });
    //  console.log(this.rowData);
  }

  columnDefs = [
    {headerName: 'CLIP ID', field: 'clipId', resizable: true, sortable: true },
    {headerName: 'REC ST', field: 'recordStatusCode' },
    {headerName: 'INDX DT', field: 'indexedDate' },
    {headerName: 'SITE ID', field: 'siteId'},
    {headerName: 'LIEN ID', field: 'liend'},
    {headerName: 'FIRST NAME', field: 'firstName' },
    {headerName: 'LAST NAME', field: 'lastName'},
    {headerName: 'PRIORITY', field: 'slaType'},
    {headerName: 'SSN', field: 'ssnMasked'},
    {headerName: 'CASE ID', field: 'caseId'},
];

// rowData = [
//   { clipId: "AJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "BJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "CJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "DJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "EJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "FJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "GJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "HJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "IJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "JJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "AJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "BJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "CJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "DJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "EJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "FJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "GJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "HJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "IJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "JJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "AJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "BJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "CJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "DJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "EJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "FJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "GJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "HJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "IJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "JJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "AJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "BJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "CJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "DJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "EJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "FJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "GJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "HJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "IJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
//   { clipId: "JJCURM0FSQ14VeB8OF8IFH18O3NG418IFBBOSQ0R324HQJRMS2LPO", recordStatusCode: "ACTIVE", siteId: "PMC1", lienId: "61821911", firstName: "RUDY", lastName: "DUIVES", ssnMasked: "XXXXX1211", caseId: "1017292848",slaType: "PASTDUE", indexedDate: "04-04-2006",},
// ];
}
