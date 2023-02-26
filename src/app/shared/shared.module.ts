import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [FooterComponent, ProjectComponent],
  imports: [CommonModule],
  exports: [FooterComponent, ProjectComponent],
})
export class SharedModule {}
