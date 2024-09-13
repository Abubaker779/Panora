interface MicrosoftdynamicssalesUser {
    accessmode: number; // Edm.Int32
    address1_addressid: string; // Edm.Guid
    address1_addresstypecode: number; // Edm.Int32
    address1_city: string; // Edm.String
    address1_composite: string; // Edm.String
    address1_country: string; // Edm.String
    address1_county: string; // Edm.String
    address1_fax: string; // Edm.String
    address1_latitude: number; // Edm.Double
    address1_line1: string; // Edm.String
    address1_line2: string; // Edm.String
    address1_line3: string; // Edm.String
    address1_longitude: number; // Edm.Double
    address1_name: string; // Edm.String
    address1_postalcode: string; // Edm.String
    address1_postofficebox: string; // Edm.String
    address1_shippingmethodcode: number; // Edm.Int32
    address1_stateorprovince: string; // Edm.String
    address1_telephone1: string; // Edm.String
    address1_telephone2: string; // Edm.String
    address1_telephone3: string; // Edm.String
    address1_upszone: string; // Edm.String
    address1_utcoffset: number; // Edm.Int32
    address2_addressid: string; // Edm.Guid
    address2_addresstypecode: number; // Edm.Int32
    address2_city: string; // Edm.String
    address2_composite: string; // Edm.String
    address2_country: string; // Edm.String
    address2_county: string; // Edm.String
    address2_fax: string; // Edm.String
    address2_latitude: number; // Edm.Double
    address2_line1: string; // Edm.String
    address2_line2: string; // Edm.String
    address2_line3: string; // Edm.String
    address2_longitude: number; // Edm.Double
    address2_name: string; // Edm.String
    address2_postalcode: string; // Edm.String
    address2_postofficebox: string; // Edm.String
    address2_shippingmethodcode: number; // Edm.Int32
    address2_stateorprovince: string; // Edm.String
    address2_telephone1: string; // Edm.String
    address2_telephone2: string; // Edm.String
    address2_telephone3: string; // Edm.String
    address2_upszone: string; // Edm.String
    address2_utcoffset: number; // Edm.Int32
    applicationid: string; // Edm.Guid
    applicationiduri: string; // Edm.String
    azureactivedirectoryobjectid: string; // Edm.Guid
    azuredeletedon: string; // Edm.DateTimeOffset
    azurestate: number; // Edm.Int32
    caltype: number; // Edm.Int32
    createdon: string; // Edm.DateTimeOffset
    defaultfilterspopulated: boolean; // Edm.Boolean
    defaultodbfoldername: string; // Edm.String
    deletedstate: number; // Edm.Int32
    disabledreason: string; // Edm.String
    displayinserviceviews: boolean; // Edm.Boolean
    domainname: string; // Edm.String
    emailrouteraccessapproval: number; // Edm.Int32
    employeeid: string; // Edm.String
    entityimage: string; // Edm.Binary
    entityimage_timestamp: number; // Edm.Int64
    entityimage_url: string; // Edm.String
    entityimageid: string; // Edm.Guid
    exchangerate: number; // Edm.Decimal
    firstname: string; // Edm.String
    fullname: string; // Edm.String
    governmentid: string; // Edm.String
    homephone: string; // Edm.String
    identityid: number; // Edm.Int32
    importsequencenumber: number; // Edm.Int32
    incomingemaildeliverymethod: number; // Edm.Int32
    internalemailaddress: string; // Edm.String
    invitestatuscode: number; // Edm.Int32
    isdisabled: boolean; // Edm.Boolean
    isemailaddressapprovedbyo365admin: boolean; // Edm.Boolean
    isintegrationuser: boolean; // Edm.Boolean
    islicensed: boolean; // Edm.Boolean
    issyncwithdirectory: boolean; // Edm.Boolean
    jobtitle: string; // Edm.String
    lastname: string; // Edm.String
    middlename: string; // Edm.String
    mobilealertemail: string; // Edm.String
    mobilephone: string; // Edm.String
    modifiedon: string; // Edm.DateTimeOffset
    nickname: string; // Edm.String
    organizationid: string; // Edm.Guid
    outgoingemaildeliverymethod: number; // Edm.Int32
    overriddencreatedon: string; // Edm.DateTimeOffset
    ownerid: string; // Edm.Guid
    passporthi: number; // Edm.Int32
    passportlo: number; // Edm.Int32
    personalemailaddress: string; // Edm.String
    photourl: string; // Edm.String
    preferredaddresscode: number; // Edm.Int32
    preferredemailcode: number; // Edm.Int32
    preferredphonecode: number; // Edm.Int32
    processid: string; // Edm.Guid
    salutation: string; // Edm.String
    setupuser: boolean; // Edm.Boolean
    sharepointemailaddress: string; // Edm.String
    skills: string; // Edm.String
    stageid: string; // Edm.Guid
    systemuserid: string; // Edm.Guid
    timezoneruleversionnumber: number; // Edm.Int32
    title: string; // Edm.String
    traversedpath: string; // Edm.String
    userlicensetype: number; // Edm.Int32
    userpuid: string; // Edm.String
    utcconversiontimezonecode: number; // Edm.Int32
    versionnumber: number; // Edm.Int64
    windowsliveid: string; // Edm.String
    yammeremailaddress: string; // Edm.String
    yammeruserid: string; // Edm.String
    yomifirstname: string; // Edm.String
    yomifullname: string; // Edm.String
    yomilastname: string; // Edm.String
    yomimiddlename: string; // Edm.String
}

export type MicrosoftdynamicssalesUserInput = Partial<MicrosoftdynamicssalesUser>;
export type MicrosoftdynamicssalesUserOutput = MicrosoftdynamicssalesUserInput;