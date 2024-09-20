import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S3Component } from '../s3/s3.component';
import { LambdaComponent } from '../lambda/lambda.component';
import { CodeTemplateComponent } from '../lambda/code-template/code-template.component';
import { AwsDashboardComponent } from './aws-dashboard/aws-dashboard.component';

@NgModule({
  declarations: [
    S3Component,
    LambdaComponent,
    CodeTemplateComponent,
    AwsDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AwsSvcModule { }
