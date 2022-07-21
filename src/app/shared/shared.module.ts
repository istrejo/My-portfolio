import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProjectComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, ProjectComponent],
})
export class SharedModule {}
