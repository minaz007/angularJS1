import { Component, OnInit ,NgZone} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  
  constructor(private router:Router ,
              public zone: NgZone,
              private route: ActivatedRoute,             
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private alertService: AlertService) 
              { 

                this.loginForm  =  this.formBuilder.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required]
                }); 
                
              }
  

  ngOnInit() {
    
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formControls() { return this.loginForm.controls; }

  login()
  {     
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;      
    if (this.loginForm.valid) {
              this.authenticationService.login(this.loginForm.value)
                .subscribe(
                  data => {
                    console.log(data);
                    localStorage.setItem('token', data.toString());
                    this.router.navigate(['/home']);
                  },
                  error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
            }
  }

 
  
  
}
