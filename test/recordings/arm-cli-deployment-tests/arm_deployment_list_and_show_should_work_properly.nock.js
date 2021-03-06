// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=43e77bec810a4fd1acb6234ba5eefa28; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 06 Aug 2015 21:52:11 GMT',
  'content-length': '2773' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1659?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup1659' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14482',
  'x-ms-request-id': '3d588538-25eb-4f6f-8e55-eb401a123cbf',
  'x-ms-correlation-request-id': '3d588538-25eb-4f6f-8e55-eb401a123cbf',
  'x-ms-routing-request-id': 'WESTUS:20150806T215212Z:3d588538-25eb-4f6f-8e55-eb401a123cbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:12 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1659?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659\",\"name\":\"xDeploymentTestGroup1659\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '4b928f9b-b8a9-40e6-8a51-20ee6107065a',
  'x-ms-correlation-request-id': '4b928f9b-b8a9-40e6-8a51-20ee6107065a',
  'x-ms-routing-request-id': 'WESTUS:20150806T215212Z:4b928f9b-b8a9-40e6-8a51-20ee6107065a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1659/deployments/Deploy11039/validate?api-version=2014-04-01-preview', '*')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/deployments/Deploy11039\",\"name\":\"Deploy11039\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite14666\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost21218\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2015-08-06T21:52:13.1145983Z\",\"duration\":\"PT0S\",\"correlationId\":\"6b3f258e-20ce-4600-9d5f-a94b8de5846c\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/Sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite14666/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost21218-xDeploymentTestGroup1659\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost21218-xDeploymentTestGroup1659\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost21218\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost21218\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost21218\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost21218\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/components/xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite14666\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-request-id': '6b3f258e-20ce-4600-9d5f-a94b8de5846c',
  'x-ms-correlation-request-id': '6b3f258e-20ce-4600-9d5f-a94b8de5846c',
  'x-ms-routing-request-id': 'WESTUS:20150806T215213Z:6b3f258e-20ce-4600-9d5f-a94b8de5846c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:12 GMT',
  'content-length': '5319' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1659/deployments/Deploy11039?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/deployments/Deploy11039\",\"name\":\"Deploy11039\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite14666\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost21218\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2015-08-06T21:52:13.672175Z\",\"duration\":\"PT0.184094S\",\"correlationId\":\"4905fd48-9386-44af-a738-befe0cfedf99\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/Sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite14666/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost21218-xDeploymentTestGroup1659\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost21218-xDeploymentTestGroup1659\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost21218\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost21218\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost21218\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost21218\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/components/xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite14666\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-request-id': '4905fd48-9386-44af-a738-befe0cfedf99',
  'x-ms-correlation-request-id': '4905fd48-9386-44af-a738-befe0cfedf99',
  'x-ms-routing-request-id': 'WESTUS:20150806T215213Z:4905fd48-9386-44af-a738-befe0cfedf99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:13 GMT',
  'content-length': '5325' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1659/deployments/Deploy11039?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/deployments/Deploy11039\",\"name\":\"Deploy11039\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite14666\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost21218\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2015-08-06T21:52:13.672175Z\",\"duration\":\"PT0.184094S\",\"correlationId\":\"4905fd48-9386-44af-a738-befe0cfedf99\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/Sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite14666/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost21218-xDeploymentTestGroup1659\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost21218-xDeploymentTestGroup1659\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite14666\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost21218\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost21218\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21218\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21218\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost21218\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost21218\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/Microsoft.Web/sites/xDeploymentTestSite14666\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14666\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1659/providers/microsoft.insights/components/xDeploymentTestSite14666\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite14666\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14345',
  'x-ms-request-id': 'ee41d82f-7e5b-4990-8e6c-39aba435d833',
  'x-ms-correlation-request-id': 'ee41d82f-7e5b-4990-8e6c-39aba435d833',
  'x-ms-routing-request-id': 'WESTUS:20150806T215214Z:ee41d82f-7e5b-4990-8e6c-39aba435d833',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:13 GMT',
  'content-length': '5325' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1659/deployments/?$filter=provisioningState%20eq%20%27Running%27&api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14033',
  'x-ms-request-id': '7e81dcdc-063f-45a7-9e9b-1de86c1d4dda',
  'x-ms-correlation-request-id': '7e81dcdc-063f-45a7-9e9b-1de86c1d4dda',
  'x-ms-routing-request-id': 'WESTUS:20150806T215214Z:7e81dcdc-063f-45a7-9e9b-1de86c1d4dda',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:13 GMT',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1659?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE2NTktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-request-id': 'abdbc0a0-4504-4fc2-9143-120c7c088446',
  'x-ms-correlation-request-id': 'abdbc0a0-4504-4fc2-9143-120c7c088446',
  'x-ms-routing-request-id': 'WESTUS:20150806T215214Z:abdbc0a0-4504-4fc2-9143-120c7c088446',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:14 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE2NTktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE2NTktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14032',
  'x-ms-request-id': 'e2845bce-7573-4a2d-845d-7c2d1ea1cf01',
  'x-ms-correlation-request-id': 'e2845bce-7573-4a2d-845d-7c2d1ea1cf01',
  'x-ms-routing-request-id': 'WESTUS:20150806T215229Z:e2845bce-7573-4a2d-845d-7c2d1ea1cf01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:29 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE2NTktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE2NTktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14602',
  'x-ms-request-id': '9131c83e-c930-4dca-8e5e-cd9393ff0b66',
  'x-ms-correlation-request-id': '9131c83e-c930-4dca-8e5e-cd9393ff0b66',
  'x-ms-routing-request-id': 'WESTUS:20150806T215245Z:9131c83e-c930-4dca-8e5e-cd9393ff0b66',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:44 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE2NTktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14031',
  'x-ms-request-id': '05e4d111-3952-4c9f-99a8-982ac47b4363',
  'x-ms-correlation-request-id': '05e4d111-3952-4c9f-99a8-982ac47b4363',
  'x-ms-routing-request-id': 'WESTUS:20150806T215300Z:05e4d111-3952-4c9f-99a8-982ac47b4363',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:52:59 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestSite14666','xDeploymentTestHost21218','xDeploymentTestGroup1659','Deploy11039'];};