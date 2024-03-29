export class AssessmentData {
  dataCollectionProcedure: string;
  analysisDescription: string;
  statisticalMethods: boolean;
  statisticalMethodsDescription: string;

  constructor() {
    this.dataCollectionProcedure = null;
    this.analysisDescription = null;
    this.statisticalMethods = null;
    this.statisticalMethodsDescription = null;
  }
}

export class AssessmentProcedure {
  occurDate: Date;
  occurLocal: string;
  occurDetail: string;
  occurTime: number;
  assessmentProcedureSteps: AssessmentProcedureStep[];
  isPilotAssessment: boolean;
  pilotDescription: string;
  questionsAllowed: boolean;

  constructor() {
    this.occurDate = null;
    this.occurLocal = null;
    this.occurDetail = null;
    this.occurTime = null;
    this.assessmentProcedureSteps = [];
    this.isPilotAssessment = null;
    this.pilotDescription = null;
    this.questionsAllowed = null;
  }
}

export class AssessmentThreat {
  assessmentToolsId: number;
  threats: string[];
  controlMeasure: string;
  limitations: string[];
  ethicalAspectsDefined: boolean;
  ethicalAspectsDescription: string;
  biasDescription: string;

  constructor() {
    this.assessmentToolsId = null;
    this.threats = [];
    this.controlMeasure = null;
    this.limitations = [];
    this.ethicalAspectsDefined = null;
    this.ethicalAspectsDescription = null;
    this.biasDescription = null;
  }
}

export class SystemUser {
  uid: string;
  login: string;
  password: string;
  name: string;
  email: string;
  admin: boolean;
  isEnabled: boolean;
  isReviewer: boolean;

  constructor() {
  }
}

export class UsabilityGoal {
  attribute: string;
  goal: string;
  done: boolean;

  constructor(attribute: string) {
    this.attribute = attribute;
    this.done = false;
  }
}

export class SmartCityQuestionnaire {
  hasDataManagement: boolean;
  hasAppExecution: boolean;
  hasSensorNetwork: boolean;
  hasDataProcessing: boolean;
  hasDataAccess: boolean;
  hasServiceManagement: boolean;
  hasSoftwareTools: boolean;
  defineCityModel: boolean;

  constructor(hasDataManagement: boolean,
              hasAppExecution: boolean,
              hasSensorNetwork: boolean,
              hasDataProcessing: boolean,
              hasDataAccess: boolean,
              hasServiceManagement: boolean,
              hasSoftwareTools: boolean,
              defineCityModel: boolean) {
    this.hasDataManagement = hasDataManagement;
    this.hasAppExecution = hasAppExecution;
    this.hasSensorNetwork = hasSensorNetwork;
    this.hasDataProcessing = hasDataProcessing;
    this.hasDataAccess = hasDataAccess;
    this.hasServiceManagement = hasServiceManagement;
    this.hasSoftwareTools = hasSoftwareTools;
    this.defineCityModel = defineCityModel;
  }

  getValueList(): boolean[] {
    return [this.hasDataManagement, this.hasAppExecution, this.hasSensorNetwork, this.hasDataProcessing,
      this.hasDataAccess, this.hasServiceManagement, this.hasSoftwareTools, this.defineCityModel];
  }
}

export class ScaleQuestion {
  scaleId: number;
  key: string;
  question: string;
  lowerScoreLabel: string;
  higherScoreLabel: string;

  constructor() {
  }
}

export class Scale {
  uid: string;
  acronym: string;
  name: string;
  description: string;
  measures: string[];
  scaleQuestions: ScaleQuestion[];

  constructor() {
  }
}

export class Attribute {
  usabilityAttribute: string;
  variables: string;
  obtainedBy: string;

  constructor(usabilityAttribute: string) {
    this.usabilityAttribute = usabilityAttribute;
    this.variables = null;
    this.obtainedBy = null;
  }
}

export class Participant {
  participantsQuantity: number;
  participationLocalType: string;
  hasCompensation: boolean;
  compensationDescription: string;
  criteria: string;
  hasCollectedInformation: boolean;
  collectedInformationUse: string;
  instructions: string;
  questions: string[];

  constructor() {
    this.participantsQuantity = null;
    this.participationLocalType = null;
    this.hasCompensation = null;
    this.compensationDescription = null;
    this.criteria = null;
    this.hasCollectedInformation = null;
    this.collectedInformationUse = null;
    this.instructions = null;
    this.questions = [];
  }
}

export class Task {
  description: string;
  taskExecutionTime: number;
  acceptanceCriteria: string;

  constructor() {
  }
}

export class AssessmentTools {
  tools: string[];
  toolsUsageDescription: string;
  tasks: Task[];

  constructor() {
    this.tools = [];
    this.toolsUsageDescription = null;
    this.tasks = [];
  }
}

export class AssessmentProcedureStep {
  name: string;
  description: string;

  constructor() {
  }
}
