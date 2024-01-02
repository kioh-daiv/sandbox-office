import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  //アプリケーション起動に必要なモジュール
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  //外部で制御させたいモジュール
  exports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class CustomModule {} //必要なモジュールだけ集めて外部にエクスポートできる
