import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from "@angular/router";
import {VuatConstants} from "../../../../../models/constants/vuat-constants";
import {ToastService} from "../../../../../services/toastService";
import {AssessmentService} from "../../../../../@core/auth/services/assessment.service";
import {QuestionService} from "../../../../../@core/auth/services/question.service";
import {NbDialogService, NbToastrService} from "@nebular/theme";
import {AssessmentTransferDTO} from "../../../../../models/dto/AssessmentTransferDTO";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Assessment} from "../../../../../models/assessment";
import {ParticipantDTO} from "../../../../../models/dto/ParticipantDTO";

@Component({
  selector: 'ngx-edit-participant-section',
  templateUrl: './edit-participant-section.component.html',
  styleUrls: ['./edit-participant-section.component.scss']
})
export class EditParticipantSectionComponent implements OnInit {

  form: FormGroup;
  assessment: Assessment;
  router: Router;
  isVald = false;
  dataloaded: Promise<boolean>;
  planPercentage: number;
  data: any;
  tooltipTrigger: string;
  newQuestions: string[] = [];
  avaliableQuestions: any[] = [];
  instrumentQuestions = VuatConstants.PLAN_QUESTIONS;
  planAnswersConstants = VuatConstants.PLAN_ANSWER;
  categories = VuatConstants.CATEGORIES;
  genericSelectOptions = VuatConstants.GENERIC_SELECT_OPTIONS;
  selectOptions = VuatConstants.SELECT_OPTIONS;
  participantQuestions = VuatConstants.ATTRIBUTES_QUESTIONS;
  participantDTO: ParticipantDTO;
  toast: ToastService;

  constructor(private assessmentService: AssessmentService,
              private questionService: QuestionService,
              private formBuilder: FormBuilder,
              private dialogService: NbDialogService,
              router: Router,
              private toastrService: NbToastrService) {
    this.toast = new ToastService(toastrService);
    this.router = router;
    this.assessment = <Assessment>this.router.getCurrentNavigation().extras.state;
  }

  get questions() {
    return this.form.controls.questions as FormArray;
  }

  get values() {
    return this.form.value;
  }

  ngOnInit() {
    console.log(this.participantQuestions);
    this.form = this.formBuilder.group({
      questions: this.formBuilder.array([]),
    });
    if (this.assessment.participant.questions.length !== 0) {
      this.assessment.participant.questions.map(value =>
        this.questions.push(this.formBuilder.group({
          question: [value],
        })));
    }
    this.loadAvaliableQuestions();
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {context: 'this is some additional data passed to dialog'});
  }

  addQuestion() {
    if (this.newQuestion().getRawValue() !== '')
      this.questions.push(this.newQuestion());
  }

  removeQuestion(i: number) {
    const questionControl = this.form.controls.questions as FormArray;
    const itemToRemove = questionControl.at(i).value;
    console.log(itemToRemove);
    this.questions.removeAt(i);
    this.assessment.participant.questions
      .splice(this.assessment.participant.questions.indexOf(itemToRemove.question), 1);

  }

  getCharacterizationQuestionsObject(key: string): any {
    return this.instrumentQuestions.find(item => item['key'] === key);
  }

  isNullOrUndefined(object: any): boolean {
    return object === null || object === undefined;
  }

  isEqual(var1: any, var2: any): boolean {
    return var1 === var2;
  }

  verifyParticipantState(key: string) {
    if (key === 'PA-7') {
      return this.assessment.answers.planParticipantsAnswers.howManyParticipants === this.planAnswersConstants.answered.name;
    } else if (key === 'PA-8') {
      return this.assessment.answers.planParticipantsAnswers.participationType === this.planAnswersConstants.answered.name;
    } else if (key === 'PA-9') {
      return this.assessment.answers.planParticipantsAnswers.formCompensation === this.planAnswersConstants.answered.name;
    } else if (key === 'PA-10') {
      return this.assessment.answers.planParticipantsAnswers.eligibilityCriteria === this.planAnswersConstants.answered.name;
    } else if (key === 'PA-11') {
      return this.assessment.answers.planParticipantsAnswers.demographicQuestionnaire === this.planAnswersConstants.answered.name;
    } else if (key === 'PA-12') {
      return this.assessment.answers.planParticipantsAnswers.participantsInstruction === this.planAnswersConstants.answered.name;
    } else {
      return this.assessment.answers.planParticipantsAnswers.askedQuestions === this.planAnswersConstants.answered.name;
    }
  }

  checkParticipantQuestion($event: boolean, key: string) {
    if (key === 'PA-7') {
      if ($event === true) {
        this.assessment.answers.planParticipantsAnswers.howManyParticipants = this.planAnswersConstants.answered.name;
      } else {
        this.assessment.answers.planParticipantsAnswers.howManyParticipants = this.planAnswersConstants.pending.name;
      }
    } else if (key === 'PA-8') {
      if ($event === true) {
        this.assessment.answers.planParticipantsAnswers.participationType = this.planAnswersConstants.answered.name;
      } else {
        this.assessment.answers.planParticipantsAnswers.participationType = this.planAnswersConstants.pending.name;
      }
    } else if (key === 'PA-9') {
      if ($event === true) {
        this.assessment.answers.planParticipantsAnswers.formCompensation = this.planAnswersConstants.answered.name;
      } else {
        this.assessment.answers.planParticipantsAnswers.formCompensation = this.planAnswersConstants.pending.name;
      }
    } else if (key === 'PA-10') {
      if ($event === true) {
        this.assessment.answers.planParticipantsAnswers.eligibilityCriteria = this.planAnswersConstants.answered.name;
      } else {
        this.assessment.answers.planParticipantsAnswers.eligibilityCriteria = this.planAnswersConstants.pending.name;
      }
    } else if (key === 'PA-11') {
      if ($event === true) {
        this.assessment.answers.planParticipantsAnswers.demographicQuestionnaire = this.planAnswersConstants.answered.name;
      } else {
        this.assessment.answers.planParticipantsAnswers.demographicQuestionnaire = this.planAnswersConstants.pending.name;
      }
    } else if (key === 'PA-12') {
      if ($event === true) {
        this.assessment.answers.planParticipantsAnswers.participantsInstruction = this.planAnswersConstants.answered.name;
      } else {
        this.assessment.answers.planParticipantsAnswers.participantsInstruction = this.planAnswersConstants.pending.name;
      }
    } else {
      if ($event === true) {
        this.assessment.answers.planParticipantsAnswers.askedQuestions = this.planAnswersConstants.answered.name;
      } else {
        this.assessment.answers.planParticipantsAnswers.askedQuestions = this.planAnswersConstants.pending.name;
      }
    }
  }


  async onSubmit() {
    this.mountParticipant();
    console.log(this.participantDTO);
    (await this.assessmentService.updateAssessmentParticipantSection(this.participantDTO))
      .subscribe(data => {
          this.toast.showToast('update', 'top-right', 'success', 'Assessment');
          this.assessment = data;
          const assessmentTransferDTO = new AssessmentTransferDTO(this.assessment.uid, this.assessment.projectName);
          this.router.navigate(['/pages/assessment/my-plans/edit'], {state: assessmentTransferDTO});
        },
        () => {
          this.toast.showToast('update', 'top-right', 'danger', 'Assessment');
        });
  }

  mountParticipant() {
    if (this.assessment.participant.questions === undefined) {
      this.assessment.participant.questions = [];
    }
    this.questions.getRawValue().forEach(value => {
      if (this.assessment.participant.questions.indexOf(value.question) === -1)
        this.assessment.participant.questions.push(value.question);
    });
    if (this.newQuestions !== undefined || this.newQuestions.length !== 0) {
      this.newQuestions.forEach(value => {
        if (this.assessment.participant.questions.indexOf(value) === -1)
          this.assessment.participant.questions.push(value);
      });
    }
    this.assessment.participant.questions = this.assessment.participant.questions
      .filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
    console.log(this.assessment.participant.questions);
    this.participantDTO = new ParticipantDTO(this.assessment.uid,
      this.assessment.participant.participantsQuantity,
      this.assessment.participant.participationLocalType,
      this.assessment.participant.compensationDescription,
      this.assessment.participant.criteria,
      this.assessment.participant.hasCollectedInformation,
      this.assessment.participant.collectedInformationUse,
      this.assessment.participant.instructions,
      this.assessment.participant.questions,
      this.assessment.answers.planParticipantsAnswers);
  }

  hasNoQuestion() {
    if (this.questions.getRawValue().map(value => value.question).length === 0 ||
      this.assessment.participant.questions.length === 0)
      return true;
    else if (this.questions.getRawValue().map(value => value.question).length === 1) {
      return this.questions.getRawValue().map(value => value.question)[0] === '';
    }
    return false;
  }

  private newQuestion(): FormGroup {
    return this.formBuilder.group({question: ['']});
  }

  print() {
    console.log(this.assessment.participant.questions);
  }

  private loadAvaliableQuestions() {
    console.log(this.assessment.usabilityGoals);
    this.participantQuestions.forEach(value => {
      this.assessment.usabilityGoals.forEach(value1 => {
        if (value1.attribute === value.objectKey && (value1.goal !== null && value1.goal !== ''))
          this.avaliableQuestions.push(value);
      });
    });
  }
}
