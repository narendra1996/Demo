import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  loading = false;
  isAdvancedSearch = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      siteId:[''],
      lienId:[''],
      firstName:[''],
      lastName:[''],
      ssn:[''],
      caseId:[''],
      lienType:[''],
      lienSubType:[''],
      wrokFlowStatus:[''],
      recordStatus:[''],
      updatedBy:[''],
      associateId:[''],
      priority:[''],
      courtOrderState:[''],
      originalOrCopy:[''],
      deleteType:[''],
      eiwoRecords:[''],
      interrogatory:[''],
      indexedForm:[''],
      indexedTill:[''],
      deleteFrom:[''],
      deleteTill:[''],
      releaseOrder:[''],
      needInfo:[''],
      branchCode:[''],
      companyCode:[''],
      payrollFileNumber:[''],
      adpEmployeeIdentifier:[''],
      deleteCommentCode:[''],
      userId:['']
    });
  }

  get f() { return this.searchForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.searchForm.invalid) {
      this.loading = false;
      return;
    }
    this.loading = false;
  }

  advancedSearch() {
    this.isAdvancedSearch = !this.isAdvancedSearch;
  }

}
