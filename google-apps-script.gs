// Google Apps Script - Paste this in script.google.com
// Then deploy as Web App (Execute as: Me, Who has access: Anyone)

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'First Name',
        'Last Name',
        'City/State',
        'Phone',
        'Trailer Preference',
        'Miles Per Week',
        'Years Experience',
        'Clean Record',
        'SAP Program'
      ]);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString(),
      data.firstName,
      data.lastName,
      data.cityState,
      data.phone,
      data.trailerPreference,
      data.milesPerWeek,
      data.yearsExperience,
      data.cleanRecord,
      data.sapProgram
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
