// Create team page 
const buildTeamHTML = team => {

    // Create manager html
    const buildManagerHTML = manager => {
        return `
        <div class="card">
        <div class="header">
            <h1 class="title">${manager.getName()}</h1>
            <h2 class="title">${manager.getRole()}</h2>
        </div>
        <div class="body">
            <ul class="list-group">
                <li class="list-item">Manager ID: ${manager.getId()}</li>
                <li class="list-item">Email: ${manager.getEmail()}</li>
                <li class="list-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // Create engineer html
    const buildEngineerHTML = engineer => {
        return `
        <div class="card">
        <div class="header">
            <h1 class="title">${engineer.getName()}</h1>
            <h2 class="title">${engineer.getRole()}</h2>
        </div>
        <div class="body">
            <ul class="list-group">
                <li class="list-item">Manager ID: ${engineer.getId()}</li>
                <li class="list-item">Email: ${engineer.getEmail()}</li>
                <li class="list-item">Office Number: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // Create intern html
    const buildInternHTML = intern => {
        return `
        <div class="card">
        <div class="header">
            <h1 class="title">${intern.getName()}</h1>
            <h2 class="title">${intern.getRole()}</h2>
        </div>
        <div class="body">
            <ul class="list-group">
                <li class="list-item">Manager ID: ${intern.getId()}</li>
                <li class="list-item">Email: ${intern.getEmail()}</li>
                <li class="list-item">Office Number: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // 

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager")
        .map(manager => buildManagerHTML(manager))
    );
    html.push(team.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => buildEngineerHTML(engineer))
        .join("")
    );
    html.push(team.filter(employee => employee.getRole() === "Intern")
        .map(intern => buildInternHTML(intern))
        .join("")
    );

    return html.join("");

}

// Export to create the page 
module.exports = team => {

    // add html below 
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Team Profile</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 my-team">
                    <h1 class="text-center">Team Profile</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 team-profile d-flex justify-content-center">
                    ${buildTeamHTML(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};