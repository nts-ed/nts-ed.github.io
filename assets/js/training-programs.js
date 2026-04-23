/**
 * NTS Education — Training programs page (training-programs.html).
 *
 * Handles:
 *  - Language switching (ja / zh / en) via localStorage + URL-agnostic DOM rendering.
 *  - Rendering the 4 programs from the I18N data.
 *
 * Storage key `nts-ed-lang` is independent of the Edu LandingPage's `edu-landing-lang`
 * so visitors can have different preferences on the corporate site vs learning platform.
 */

(function () {
  'use strict';

  const LANG_KEY = 'nts-ed-lang';
  const CONTACT_EMAIL = 'info@nts-ed.com';

  const I18N = {
    ja: {
      docTitle: '法人向け IT 研修プログラム — 株式会社新技研',
      metaDesc: 'JAVA / AWS / Salesforce / ServiceNow の 4 分野で、企業の現場配属を見据えた実践的な研修プログラムを提供しています。',
      nav: {
        home: 'トップ',
        about: '会社概要',
        services: '事業内容',
        training: '研修プログラム',
        contact: 'お問い合わせ',
        platform: '学習プラットフォーム',
        langLabel: 'Language',
      },
      breadcrumb: { home: 'トップ', current: '法人向け研修プログラム' },
      hero: {
        badge: '法人向け IT 研修プログラム',
        titleLine1: '実務で即戦力となる',
        titleLine2: 'エンジニアを育成',
        subtitle:
          '株式会社新技研（NTS Education）は、Java / AWS / Salesforce / ServiceNow の 4 分野で、企業の現場配属を見据えた実践的な研修プログラムを提供しています。',
      },
      labels: {
        duration: '期間',
        format: '形式',
        schedule: '開講',
        target: '対象者',
        curriculum: 'カリキュラム概要',
        summary: '特徴',
        inquire: 'この研修について問い合わせる',
      },
      programs: [
        {
          id: 'java',
          icon: 'code',
          name: 'JAVA エンジニア育成コース',
          tagline: '基礎から実践まで、4 段階のステップアップ型カリキュラム',
          duration: '約 4 ヶ月（初級 → 中級 → 上級① → 上級② の 4 段階、各約 1 ヶ月）',
          format: 'オンライン（Zoom）、平日 週 5 日',
          schedule: '随時開催（開始時期は個別にご相談ください）',
          target: [
            'IT 未経験〜初級レベルで、エンジニアを目指す方',
            '社内システム開発や SES 現場への配属を予定しているエンジニア',
            'Java を基礎から体系的に学び直したい方',
            'SI 企業・SES 企業で新入社員研修をご検討の人事・研修担当者',
          ],
          curriculum: [
            { phase: '初級', content: 'Java 基礎文法、オブジェクト指向、標準ライブラリ、開発環境構築' },
            { phase: '中級', content: 'コレクション、ジェネリクス、例外処理、ファイル I/O、マルチスレッド基礎' },
            { phase: '上級①', content: 'Spring Framework、Spring Boot、REST API 設計、JPA / Hibernate' },
            { phase: '上級②', content: '実践プロジェクト開発、CI/CD、テスト自動化、デプロイ' },
          ],
          summary:
            '各段階修了時に実践課題を用意しており、確実なスキル定着と現場即戦力レベルへの到達を目指すカリキュラム構成です。',
        },
        {
          id: 'aws',
          icon: 'cloud',
          name: 'AWS クラウド研修コース',
          tagline: 'ハンズオン中心で、現場で使える AWS を習得',
          duration: '約 1 ヶ月',
          format: 'オンライン（Zoom）、平日 週 5 日',
          schedule: '毎月開講（開始時期は個別にご相談ください）',
          target: [
            'オンプレミスからクラウドへの移行を担当するインフラエンジニア',
            'AWS 主要サービスを体系的に学びたい方',
            'クラウド案件への配属を予定している開発者',
            'AWS 認定資格（SAA / SOA 等）の取得を目指す方',
          ],
          curriculum: [
            { phase: '第 1 週', content: 'IAM、VPC、EC2、ネットワーク設計' },
            { phase: '第 2 週', content: 'S3、EBS、RDS、ストレージとデータベース' },
            { phase: '第 3 週', content: 'Lambda、API Gateway、SQS / SNS、サーバレスアーキテクチャ' },
            { phase: '第 4 週', content: 'CloudWatch、CloudFormation、運用自動化、総合演習' },
          ],
          summary:
            'ハンズオン中心の実務型カリキュラムで、受講後すぐに現場で活用できるレベルを目指します。',
        },
        {
          id: 'salesforce',
          icon: 'cloud_sync',
          name: 'Salesforce 入門コース',
          tagline: 'ノーコード開発から Apex まで、幅広くカバー',
          duration: '約 1 ヶ月',
          format: 'オンライン（Zoom）、平日 週 5 日',
          schedule: '毎月開講（開始時期は個別にご相談ください）',
          target: [
            'Salesforce 導入・運用プロジェクトに参画予定の方',
            'CRM / 業務システム開発に関心のある方',
            'Salesforce 認定資格（Administrator / Platform App Builder 等）の取得を目指す方',
            'Salesforce 案件への配属を予定しているエンジニア',
          ],
          curriculum: [
            { phase: '第 1 週', content: 'プラットフォーム概念、標準オブジェクト、ユーザー / プロファイル' },
            { phase: '第 2 週', content: 'カスタムオブジェクト、項目、リレーション、レポート / ダッシュボード' },
            { phase: '第 3 週', content: 'Flow、プロセスビルダー、検証ルール、承認プロセス' },
            { phase: '第 4 週', content: 'Apex 基礎、Lightning Component、認定資格対策' },
          ],
          summary:
            'ノーコード開発からカスタム開発まで幅広くカバーし、Salesforce エコシステムで活躍できる人材育成を目指します。',
        },
        {
          id: 'servicenow',
          icon: 'account_tree',
          name: 'ServiceNow 入門コース',
          tagline: 'ITSM 標準プロセスとカスタマイズ手法を実践的に習得',
          duration: '約 1 ヶ月',
          format: 'オンライン（Zoom）、平日 週 5 日',
          schedule: '毎月開講（開始時期は個別にご相談ください）',
          target: [
            'ITSM / ワークフロー自動化プロジェクトに参画予定の方',
            'インシデント管理 / 変更管理プロセスを体系的に学びたい方',
            'ServiceNow 認定資格（CSA 等）の取得を目指す方',
            'ServiceNow 案件への配属を予定しているエンジニア',
          ],
          curriculum: [
            { phase: '第 1 週', content: 'プラットフォーム基礎、Table / Form / List 構造' },
            { phase: '第 2 週', content: 'Incident / Change / Problem 管理、Service Catalog' },
            { phase: '第 3 週', content: 'Workflow、Business Rule、Client Script' },
            { phase: '第 4 週', content: 'Scripting、Glide API、認定資格対策' },
          ],
          summary:
            '実際のチケット運用を想定した演習を通じて、ITSM の標準プロセスとカスタマイズ手法を習得します。',
        },
      ],
      flow: {
        title: '受講までの流れ',
        subtitle: 'お問い合わせから受講開始まで、個別のご要望に合わせてご提案します',
        steps: [
          'お問い合わせ（info@nts-ed.com）',
          'ヒアリング（ご要望・対象者・希望時期の確認）',
          '詳細カリキュラム・開講日程のご提案',
          'お申込・受講契約',
          '受講開始',
        ],
      },
      contact: {
        title: 'お問い合わせ',
        subtitle:
          '各コースの開講時期や詳細カリキュラムについては、お気軽にお問い合わせください。担当者より 2 営業日以内にご連絡いたします。',
        button: 'メールで問い合わせる',
        hours: '受付時間: 平日 10:00〜16:00（土日祝を除く）',
      },
      mailto: {
        subjectPrefix: '【研修お問い合わせ】',
        bodyLines: [
          'NTS Education 研修ご担当者様',
          '',
          '下記の研修についてお問い合わせいたします。',
          '',
          '■ 研修名: {name}',
          '■ 会社名: ',
          '■ ご担当者名: ',
          '■ 受講予定人数: ',
          '■ 希望時期: ',
          '■ その他ご要望: ',
          '',
          'よろしくお願いいたします。',
        ],
      },
    },
    zh: {
      docTitle: '法人 IT 工程师研修项目 — 株式会社新技研',
      metaDesc: '在 Java / AWS / Salesforce / ServiceNow 四个领域，提供面向企业现场配属的实用型研修项目。',
      nav: {
        home: '首页',
        about: '公司概要',
        services: '业务内容',
        training: '研修项目',
        contact: '联系我们',
        platform: '学习平台',
        langLabel: '语言',
      },
      breadcrumb: { home: '首页', current: '法人研修项目' },
      hero: {
        badge: '法人 IT 工程师研修项目',
        titleLine1: '培养实战即战力',
        titleLine2: '工程师',
        subtitle:
          '株式会社新技研（NTS Education）在 Java / AWS / Salesforce / ServiceNow 四个领域，提供面向企业现场配属的实用型研修项目。',
      },
      labels: {
        duration: '课程周期',
        format: '授课形式',
        schedule: '开课时期',
        target: '适合对象',
        curriculum: '课程内容概要',
        summary: '课程特色',
        inquire: '咨询此课程',
      },
      programs: [
        {
          id: 'java',
          icon: 'code',
          name: 'JAVA 工程师培育课程',
          tagline: '基础到实战，4 阶段循序渐进型课程',
          duration: '约 4 个月（初级 → 中级 → 高级① → 高级② 4 阶段，每阶段约 1 个月）',
          format: '在线（Zoom），工作日每周 5 天',
          schedule: '随时开课（具体开始时期请个别咨询）',
          target: [
            'IT 未经验至初级水平，志在成为工程师的人员',
            '计划配属到内部系统开发或 SES 现场的工程师',
            '希望从基础开始系统重学 Java 的人员',
            '考虑实施新员工培训的 SI / SES 企业人事及研修负责人',
          ],
          curriculum: [
            { phase: '初级', content: 'Java 基础语法、面向对象、标准库、开发环境构建' },
            { phase: '中级', content: '集合、泛型、异常处理、文件 I/O、多线程基础' },
            { phase: '高级①', content: 'Spring Framework、Spring Boot、REST API 设计、JPA / Hibernate' },
            { phase: '高级②', content: '实战项目开发、CI/CD、自动化测试、部署' },
          ],
          summary:
            '各阶段结业均设置实战课题，确保技能扎实掌握，目标是达到现场即战力水平。',
        },
        {
          id: 'aws',
          icon: 'cloud',
          name: 'AWS 云计算培训课程',
          tagline: '实操为核心，掌握现场可用的 AWS',
          duration: '约 1 个月',
          format: '在线（Zoom），工作日每周 5 天',
          schedule: '每月开课（具体开始时期请个别咨询）',
          target: [
            '负责从本地迁移到云的基础设施工程师',
            '希望系统学习 AWS 主要服务的人员',
            '计划配属到云项目的开发者',
            '志在取得 AWS 认证资格（SAA / SOA 等）的人员',
          ],
          curriculum: [
            { phase: '第 1 周', content: 'IAM、VPC、EC2、网络设计' },
            { phase: '第 2 周', content: 'S3、EBS、RDS、存储与数据库' },
            { phase: '第 3 周', content: 'Lambda、API Gateway、SQS / SNS、无服务器架构' },
            { phase: '第 4 周', content: 'CloudWatch、CloudFormation、运维自动化、综合演习' },
          ],
          summary: '以实操为核心的实用型课程，目标为受训后即可在现场灵活运用。',
        },
        {
          id: 'salesforce',
          icon: 'cloud_sync',
          name: 'Salesforce 入门课程',
          tagline: '无代码开发到 Apex 开发全覆盖',
          duration: '约 1 个月',
          format: '在线（Zoom），工作日每周 5 天',
          schedule: '每月开课（具体开始时期请个别咨询）',
          target: [
            '参与 Salesforce 导入及运维项目的人员',
            '对 CRM / 业务系统开发有兴趣者',
            '志在取得 Salesforce 认证资格（Administrator / Platform App Builder 等）',
            '计划配属到 Salesforce 项目的工程师',
          ],
          curriculum: [
            { phase: '第 1 周', content: '平台基本概念、标准对象、用户 / 配置文件' },
            { phase: '第 2 周', content: '自定义对象、字段、关系、报表 / 仪表板' },
            { phase: '第 3 周', content: 'Flow、Process Builder、验证规则、审批流程' },
            { phase: '第 4 周', content: 'Apex 基础、Lightning Component、认证资格备考' },
          ],
          summary:
            '涵盖无代码开发到自定义开发全范围，培养能在 Salesforce 生态中活跃的实用型人才。',
        },
        {
          id: 'servicenow',
          icon: 'account_tree',
          name: 'ServiceNow 入门课程',
          tagline: '实践性掌握 ITSM 标准流程与自定义手法',
          duration: '约 1 个月',
          format: '在线（Zoom），工作日每周 5 天',
          schedule: '每月开课（具体开始时期请个别咨询）',
          target: [
            '参与 ITSM / 工作流自动化项目的人员',
            '希望系统学习事件管理 / 变更管理流程的人员',
            '志在取得 ServiceNow 认证资格（CSA 等）的人员',
            '计划配属到 ServiceNow 项目的工程师',
          ],
          curriculum: [
            { phase: '第 1 周', content: '平台基础、Table / Form / List 结构' },
            { phase: '第 2 周', content: '事件 / 变更 / 问题管理、Service Catalog' },
            { phase: '第 3 周', content: 'Workflow、Business Rule、Client Script' },
            { phase: '第 4 周', content: 'Scripting、Glide API、认证资格备考' },
          ],
          summary: '通过实际工单运维场景演习，掌握 ITSM 标准流程与自定义手法。',
        },
      ],
      flow: {
        title: '申请流程',
        subtitle: '从咨询到开课，我们根据您的具体需求量身定制方案',
        steps: [
          '发送咨询邮件至 info@nts-ed.com',
          '沟通需求（目标、受训对象、期望时期）',
          '提供详细课程方案及开课日程',
          '签约报名',
          '开课',
        ],
      },
      contact: {
        title: '联系我们',
        subtitle:
          '各课程开课时期及详细课程内容，欢迎随时咨询。负责人将在 2 个工作日内与您联系。',
        button: '邮件咨询',
        hours: '接待时间: 工作日 10:00〜16:00（周末及节假日除外）',
      },
      mailto: {
        subjectPrefix: '【研修咨询】',
        bodyLines: [
          'NTS Education 研修负责人 您好：',
          '',
          '咨询以下课程内容：',
          '',
          '■ 课程名称: {name}',
          '■ 公司名称: ',
          '■ 联系人: ',
          '■ 预计受训人数: ',
          '■ 期望时期: ',
          '■ 其他需求: ',
          '',
          '请查收。',
        ],
      },
    },
    en: {
      docTitle: 'Corporate IT Engineer Training Programs — NTS Education',
      metaDesc: 'Practical training programs in Java, AWS, Salesforce, and ServiceNow, designed for engineers heading to real-world assignments.',
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        training: 'Training Programs',
        contact: 'Contact',
        platform: 'Learning Platform',
        langLabel: 'Language',
      },
      breadcrumb: { home: 'Home', current: 'Corporate Training Programs' },
      hero: {
        badge: 'Corporate IT Engineer Training Programs',
        titleLine1: 'Build production-ready',
        titleLine2: 'engineers',
        subtitle:
          'NTS Education Inc. offers practical training programs in Java, AWS, Salesforce, and ServiceNow, designed for engineers heading to real-world assignments.',
      },
      labels: {
        duration: 'Duration',
        format: 'Format',
        schedule: 'Schedule',
        target: 'Target Audience',
        curriculum: 'Curriculum Overview',
        summary: 'Highlights',
        inquire: 'Inquire About This Program',
      },
      programs: [
        {
          id: 'java',
          icon: 'code',
          name: 'JAVA Engineer Training Program',
          tagline: 'A 4-stage step-up curriculum from fundamentals to production',
          duration: 'Approx. 4 months (Beginner → Intermediate → Advanced I → Advanced II, about 1 month each)',
          format: 'Online (Zoom), weekdays Monday–Friday',
          schedule: 'Available year-round (start date negotiable)',
          target: [
            'IT beginners and junior engineers pursuing a development career',
            'Engineers planned for deployment to in-house systems or SES assignments',
            'Professionals seeking to learn Java systematically from scratch',
            'HR/Training leads at SI and SES firms planning new-hire onboarding',
          ],
          curriculum: [
            { phase: 'Beginner', content: 'Java fundamentals, OOP, standard libraries, dev environment' },
            { phase: 'Intermediate', content: 'Collections, generics, exception handling, file I/O, threading basics' },
            { phase: 'Advanced I', content: 'Spring Framework, Spring Boot, REST API design, JPA/Hibernate' },
            { phase: 'Advanced II', content: 'Real-world project development, CI/CD, automated testing, deployment' },
          ],
          summary:
            'Each stage concludes with hands-on exercises to ensure firm skill retention and production-ready proficiency.',
        },
        {
          id: 'aws',
          icon: 'cloud',
          name: 'AWS Cloud Training',
          tagline: 'Hands-on curriculum for immediate on-site application',
          duration: 'Approx. 1 month',
          format: 'Online (Zoom), weekdays Monday–Friday',
          schedule: 'Monthly (start date negotiable)',
          target: [
            'Infrastructure engineers leading on-premise-to-cloud migration',
            'Professionals seeking systematic mastery of core AWS services',
            'Developers planned for deployment to cloud-focused projects',
            'Candidates pursuing AWS certifications (SAA, SOA, etc.)',
          ],
          curriculum: [
            { phase: 'Week 1', content: 'IAM, VPC, EC2, network design' },
            { phase: 'Week 2', content: 'S3, EBS, RDS, storage and databases' },
            { phase: 'Week 3', content: 'Lambda, API Gateway, SQS/SNS, serverless architecture' },
            { phase: 'Week 4', content: 'CloudWatch, CloudFormation, operations automation, capstone exercise' },
          ],
          summary:
            'Hands-on practical curriculum designed for immediate on-site application after completion.',
        },
        {
          id: 'salesforce',
          icon: 'cloud_sync',
          name: 'Salesforce Fundamentals',
          tagline: 'From low-code to custom Apex development',
          duration: 'Approx. 1 month',
          format: 'Online (Zoom), weekdays Monday–Friday',
          schedule: 'Monthly (start date negotiable)',
          target: [
            'Project members for Salesforce implementation or operations',
            'Those interested in CRM and business-systems development',
            'Candidates preparing for Salesforce certifications (Administrator, Platform App Builder, etc.)',
            'Engineers planned for deployment to Salesforce projects',
          ],
          curriculum: [
            { phase: 'Week 1', content: 'Platform concepts, standard objects, users/profiles' },
            { phase: 'Week 2', content: 'Custom objects, fields, relationships, reports/dashboards' },
            { phase: 'Week 3', content: 'Flow, Process Builder, validation rules, approval processes' },
            { phase: 'Week 4', content: 'Apex fundamentals, Lightning Components, certification prep' },
          ],
          summary:
            'Covers both low-code and custom development, producing well-rounded professionals ready for the Salesforce ecosystem.',
        },
        {
          id: 'servicenow',
          icon: 'account_tree',
          name: 'ServiceNow Fundamentals',
          tagline: 'Master ITSM standard processes and customization',
          duration: 'Approx. 1 month',
          format: 'Online (Zoom), weekdays Monday–Friday',
          schedule: 'Monthly (start date negotiable)',
          target: [
            'Project members for ITSM or workflow-automation initiatives',
            'Those seeking to systematically learn incident and change management',
            'Candidates preparing for ServiceNow certifications (CSA, etc.)',
            'Engineers planned for deployment to ServiceNow projects',
          ],
          curriculum: [
            { phase: 'Week 1', content: 'Platform fundamentals, Table/Form/List structure' },
            { phase: 'Week 2', content: 'Incident/Change/Problem management, Service Catalog' },
            { phase: 'Week 3', content: 'Workflow, Business Rules, Client Scripts' },
            { phase: 'Week 4', content: 'Scripting, Glide API, certification prep' },
          ],
          summary:
            'Simulates real ticket-operation scenarios to master ITSM standard processes and customization techniques.',
        },
      ],
      flow: {
        title: 'Enrollment Process',
        subtitle: 'From inquiry to training start, we tailor proposals to your needs',
        steps: [
          'Contact us at info@nts-ed.com',
          'Discovery call (goals, target learners, desired timing)',
          'Tailored curriculum and schedule proposal',
          'Contract and enrollment',
          'Training begins',
        ],
      },
      contact: {
        title: 'Contact Us',
        subtitle:
          'For course start dates and detailed curriculum, feel free to reach out. Our team will respond within 2 business days.',
        button: 'Email Us',
        hours: 'Hours: Weekdays 10:00–16:00 (excl. weekends and holidays)',
      },
      mailto: {
        subjectPrefix: '[Training Inquiry] ',
        bodyLines: [
          'Dear NTS Education Training Team,',
          '',
          'I would like to inquire about the following program:',
          '',
          '- Program: {name}',
          '- Company: ',
          '- Contact name: ',
          '- Estimated participants: ',
          '- Preferred timing: ',
          '- Additional requests: ',
          '',
          'Best regards,',
        ],
      },
    },
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function buildMailto(dict, programName) {
    const subject = dict.mailto.subjectPrefix + programName;
    const body = dict.mailto.bodyLines
      .map((line) => line.replace('{name}', programName))
      .join('\n');
    return (
      'mailto:' +
      CONTACT_EMAIL +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
    );
  }

  function buildGeneralMailto(dict) {
    return (
      'mailto:' +
      CONTACT_EMAIL +
      '?subject=' +
      encodeURIComponent(dict.mailto.subjectPrefix.trim())
    );
  }

  function renderPrograms(dict) {
    const list = dict.programs
      .map((p) => {
        const targetItems = p.target.map((t) => '<li>' + escapeHtml(t) + '</li>').join('');
        const curriculumRows = p.curriculum
          .map(
            (c) =>
              '<tr><th>' +
              escapeHtml(c.phase) +
              '</th><td>' +
              escapeHtml(c.content) +
              '</td></tr>',
          )
          .join('');
        return (
          '<article class="program-card" id="program-' +
          p.id +
          '">' +
          '<div class="program-head">' +
          '<span class="material-icons program-icon">' +
          escapeHtml(p.icon) +
          '</span>' +
          '<div class="program-head-text">' +
          '<h3>' +
          escapeHtml(p.name) +
          '</h3>' +
          '<p class="program-tagline">' +
          escapeHtml(p.tagline) +
          '</p>' +
          '</div>' +
          '</div>' +
          '<dl class="program-meta">' +
          '<dt>' +
          escapeHtml(dict.labels.duration) +
          '</dt><dd>' +
          escapeHtml(p.duration) +
          '</dd>' +
          '<dt>' +
          escapeHtml(dict.labels.format) +
          '</dt><dd>' +
          escapeHtml(p.format) +
          '</dd>' +
          '<dt>' +
          escapeHtml(dict.labels.schedule) +
          '</dt><dd>' +
          escapeHtml(p.schedule) +
          '</dd>' +
          '</dl>' +
          '<div class="program-section">' +
          '<h4>' +
          escapeHtml(dict.labels.target) +
          '</h4>' +
          '<ul class="program-target">' +
          targetItems +
          '</ul>' +
          '</div>' +
          '<div class="program-section">' +
          '<h4>' +
          escapeHtml(dict.labels.curriculum) +
          '</h4>' +
          '<table class="program-curriculum"><tbody>' +
          curriculumRows +
          '</tbody></table>' +
          '</div>' +
          '<div class="program-section">' +
          '<h4>' +
          escapeHtml(dict.labels.summary) +
          '</h4>' +
          '<p class="program-summary">' +
          escapeHtml(p.summary) +
          '</p>' +
          '</div>' +
          '<div class="program-cta">' +
          '<a href="' +
          buildMailto(dict, p.name) +
          '" class="btn btn-primary">' +
          '<span class="material-icons">mail</span>' +
          escapeHtml(dict.labels.inquire) +
          '</a>' +
          '</div>' +
          '</article>'
        );
      })
      .join('');
    document.getElementById('programs-list').innerHTML = list;
  }

  function renderFlow(dict) {
    document.getElementById('flow-title').textContent = dict.flow.title;
    document.getElementById('flow-subtitle').textContent = dict.flow.subtitle;
    const steps = dict.flow.steps
      .map(
        (s, i) =>
          '<li class="flow-step"><span class="flow-step-num">' +
          (i + 1) +
          '</span><span class="flow-step-text">' +
          escapeHtml(s) +
          '</span></li>',
      )
      .join('');
    document.getElementById('flow-steps').innerHTML = steps;
  }

  function render(lang) {
    const dict = I18N[lang] || I18N.ja;
    document.documentElement.setAttribute('lang', lang);
    document.title = dict.docTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.metaDesc);

    // Nav
    document.getElementById('nav-home').textContent = dict.nav.home;
    document.getElementById('nav-about').textContent = dict.nav.about;
    document.getElementById('nav-services').textContent = dict.nav.services;
    document.getElementById('nav-training').textContent = dict.nav.training;
    document.getElementById('nav-contact').textContent = dict.nav.contact;
    document.getElementById('nav-platform').textContent = dict.nav.platform;

    // Breadcrumb
    document.getElementById('breadcrumb-home').textContent = dict.breadcrumb.home;
    document.getElementById('breadcrumb-current').textContent = dict.breadcrumb.current;

    // Hero
    document.getElementById('hero-badge').textContent = dict.hero.badge;
    document.getElementById('hero-title-1').textContent = dict.hero.titleLine1;
    document.getElementById('hero-title-2').textContent = dict.hero.titleLine2;
    document.getElementById('hero-subtitle').textContent = dict.hero.subtitle;

    // Programs
    renderPrograms(dict);

    // Flow
    renderFlow(dict);

    // Contact
    document.getElementById('contact-title').textContent = dict.contact.title;
    document.getElementById('contact-subtitle').textContent = dict.contact.subtitle;
    const contactBtn = document.getElementById('contact-button');
    contactBtn.textContent = dict.contact.button;
    contactBtn.setAttribute('href', buildGeneralMailto(dict));
    document.getElementById('contact-hours').textContent = dict.contact.hours;

    // Current lang indicator
    document.querySelectorAll('.lang-option').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const current = document.getElementById('lang-current');
    if (current) {
      current.textContent = lang === 'ja' ? '日本語' : lang === 'zh' ? '中文' : 'English';
    }
  }

  function detectLang() {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored && I18N[stored]) return stored;
    } catch (e) {
      /* ignore */
    }
    const browser = (navigator.language || 'ja').toLowerCase();
    if (browser.startsWith('zh')) return 'zh';
    if (browser.startsWith('en')) return 'en';
    return 'ja';
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* ignore */
    }
    render(lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Wire up language switcher
    document.querySelectorAll('.lang-option').forEach((btn) => {
      btn.addEventListener('click', function () {
        setLang(btn.dataset.lang);
        const menu = document.getElementById('lang-menu');
        if (menu) menu.classList.remove('open');
      });
    });

    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    if (langToggle && langMenu) {
      langToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        langMenu.classList.toggle('open');
      });
      document.addEventListener('click', function () {
        langMenu.classList.remove('open');
      });
    }

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    render(detectLang());
  });
})();
