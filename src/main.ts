import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerLicense } from '@syncfusion/ej2-base';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  registerLicense('Mgo+DSMBaFt/QHJqVVhjWlpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9jQH9UdkxmUHtfc3xQTg==;Mgo+DSMBPh8sVXJ0S0R+XE9HcFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xTf0RkWXZbeXBURWlbWQ==;ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkxiXn9XdX1RR2RdUUw=;NzE4NDQ0QDMyMzAyZTMyMmUzMEYzUEROOC94akpXbFpJZVI0RTZDK3lULzFkbWhnbFVJakdib2xoTzhnMjg9;NzE4NDQ1QDMyMzAyZTMyMmUzMGZSY09XNndsYzdUU2dVT2RVcEpoYm1uOFg5MnRpVGdEK3FqNUZEaUMzY2s9;NRAiBiAaIQQuGjN/V0Z+Xk9EaFxEVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdEVqWHheeXFcQmFYWUJ+;NzE4NDQ3QDMyMzAyZTMyMmUzMG85enFIZzRLUXcwNkVNMXJKdTVkcFlMSEw1S3JraXRBVVpyQXZ1S2FVTGM9;NzE4NDQ4QDMyMzAyZTMyMmUzMGorbWttQS9aNFJJcno2ckp5c0g4Q01MaXZvOVcxT2IwY0FsQnlGSzJrWTQ9;Mgo+DSMBMAY9C3t2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkxiXn9XdX1RR2VZU0w=;NzE4NDUwQDMyMzAyZTMyMmUzME1VZTJPQkpVQTVhekwzaDg1VVdwdU9EYmpVVXNhdWFnT3FNb0pJd0xCZlk9;NzE4NDUxQDMyMzAyZTMyMmUzMEYzLzFhL04vRTZoRGpVcHg3emhRTFAvVmVhclB5Q3VTSHRKNytlcDMwakU9;NzE4NDUyQDMyMzAyZTMyMmUzMG85enFIZzRLUXcwNkVNMXJKdTVkcFlMSEw1S3JraXRBVVpyQXZ1S2FVTGM9');